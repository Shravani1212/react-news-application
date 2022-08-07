import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardText, Button
} from "reactstrap"
const CardD=props=>{
    return(
        <Card style={{
            display: 'inline-block', width: 300, padding: 10,
            margin:10
        }} >
        <CardImg
           
            height="300px"
        src={props.Imgurl}
            alt="GFG Logo" />
        <CardBody>
            <CardTitle tag="h5">{props.Title}</CardTitle>
            <CardText>{`- ${props.Author===null?'NA':props.Author}`}</CardText>
            <Button>Read Later</Button>
        </CardBody>
    </Card>
    );
}
export default CardD;