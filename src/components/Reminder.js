import React from "react";

export default function Reminder(props) {
  if (props.description === "Clear Sky") {
    return <strong> Don't forget to get the SPF 😎</strong>;
  } else {
    return <strong> Don't forget to take VITAMIN D 💊</strong>;
  }
}
