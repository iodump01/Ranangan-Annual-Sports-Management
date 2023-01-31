import React from "react";
import "../App.css";
function TimelineOne(props) {
  return (
    <>
      <section className="timeline">
        <div className="container">
          <div className="timeline-item">
            <div className="timeline-img"></div>
            <div className="timeline-content timeline-card js--fadeInRight text-gray-900 dark:text-gray-200  bg-gray-50 dark:bg-gray-800">
              <div className="timeline-img-header">
                <img className="timeline-img-header" src={props.img} alt="" />
                <h2>{props.title}</h2>
              </div>
              <div className="date">{props.date}</div>
              <p>{props.description}</p>
              <a className="bnt-more" href="/">
                For More About {props.title}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TimelineOne;
