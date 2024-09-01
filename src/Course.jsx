/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Course = ({ title, description, image }) => {
  //   console.log(props);
  //   const title = props.title;
  //   const description = props.description;
  //   const { title, description } = props;
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
          </div>
        </div>

        <div className="content">{description}</div>
      </div>
    </div>
    // <div>
    //   <div>{title}</div>
    //   <div>{description}</div>
    //   <img src={image} alt="" />
    // </div>
  );
};

export default Course;
