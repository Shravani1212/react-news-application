import React, { useEffect, useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import axios from 'axios';

const NewsCard = (props) => {
  const [btnClick, setBtnClick] = useState(false);
  const [isAddedToReadLater, setIsAddedToReadLater] = useState(false);

  const clickHandler = () => {
    setBtnClick(true);
  };

  useEffect(() => {
    if (btnClick && !isAddedToReadLater) {
      const postData = {
        title: props.Title,
        urlToImage: props.Imgurl,
        author: props.Author,
      };

      axios
        .get('http://localhost:3004/news')
        .then((response) => {
          const newsList = response.data;
          const isNewsAlreadyAdded = newsList.some(
            (news) =>
              news.title === props.Title &&
              news.urlToImage === props.Imgurl &&
              news.author === props.Author
          );
          if (!isNewsAlreadyAdded) {
            axios
              .post('http://localhost:3004/news', postData)
              .then((response) => {
                console.log(response.data);
                setIsAddedToReadLater(true);
              })
              .catch((error) => {
                console.log(error);
              });
          }
          else{
            alert("You have alreay added the news")
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [btnClick, isAddedToReadLater, props.Author, props.Imgurl, props.Title]);

  return (
    <Card style={styles.card}>
      <CardImg height="300px" src={props.Imgurl} alt="News Image" />
      <CardBody>
        <CardTitle tag="h5" style={styles.title}>
          {props.Title}
        </CardTitle>
        <CardText style={styles.author}>{`- ${
          props.Author === null ? 'NA' : props.Author
        }`}</CardText>
        {props.isdisplay ? (
          ''
        ) : isAddedToReadLater ? (
          <Button className="btn-danger" disabled>
            Added To Read Later
          </Button>
        ) : (
          <Button onClick={clickHandler}>Read Later</Button>
        )}
      </CardBody>
    </Card>
  );
};

const styles = {
  card: {
    display: 'inline-block',
    width: 300,
    padding: 10,
    margin: 10,
    height: 600,
    overflow: 'auto',
    border: '1px solid #ccc',
    borderRadius: 5,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  author: {
    fontStyle: 'italic',
  },
};

export default NewsCard;
