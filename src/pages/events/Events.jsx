import React from "react";
import "./events.css";
import Card from "./Card";
import eventsList from "./eventList";

function Events() {
  return (
    <div className="eventspage">
      <h2>Events</h2>
      <div className="events">
        {eventsList.map((event, index)=><Card key={index} event={event} />)}
      </div>
    </div>
  );
}

export default Events;
