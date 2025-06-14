import './title.css';
import React from 'react';

export function Title(props) {
  return (
    <div className="title">
      {props.text}
    </div>
  );
}
