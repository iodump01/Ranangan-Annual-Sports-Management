import React from "react";
import Data from "./TimelineData";
import TimelineOne from "./Timeline1";
import "../App.css"

function Timeline() {
  return (
    <div>
      {Data.map((e) => {
        return (
          <TimelineOne
            title={e.title}
            description={e.description}
            img={e.img}
            date={e.date}
          />
        );
      })}
    </div>
  );
}

export default Timeline;
