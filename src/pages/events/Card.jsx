import React from 'react'
import { motion
 } from 'framer-motion';
const Card = (props) => {
  return (
    <motion.div
      className="event-card"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1}}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="event-text">
        <h3>{props.event.title}</h3>
        <p>{props.event.description}</p>
      </div>
      <div className="event-img">
        <img src={props.event.imgURL} alt={props.event.title} />
      </div>
    </motion.div>
  );
}

export default Card;