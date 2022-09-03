import React from "react";

export default function FormatedTime(props) {
  let hours = props.time.getHours();
  let minutes = props.time.getMinutes();
  if (hours < 0) {
    hours = `0${hours}`;
  }
  if (minutes < 0) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {hours}:{minutes}
    </div>
  );
}
