import React, { Fragment, useEffect, useState } from "react";

import NewsCard from "./NewsCard";

const NewsDashboard = (props) => {
  return (
    <Fragment>
      <div style={styles.container}>
        {props.news.map((newItem, index) => {
          return (
            <NewsCard
              isdisplay={props.isReadList}
              key={index}
              Imgurl={newItem.urlToImage}
              Title={newItem.title}
              Author={newItem.author}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginTop: "20px",
  },
};

export default NewsDashboard;
