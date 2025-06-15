import React from 'react';
import './name.css';

export function Name({
  text = "НАЗВА НАБОРУ",
  bgColor = "#ffffff",
  color = "#1F1F1F",
  pos = "absolute",
  bottom = "0"   
}) {
  const styles = {
    backgroundColor: bgColor,
    color: color,
     position: pos,
  bottom: bottom  };

  return (
    <div className="nameblocktext" style={styles}>
      {text}
    </div>
  );
}
