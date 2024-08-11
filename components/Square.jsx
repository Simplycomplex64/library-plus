import React from "react";
import Badges from "./Badges";

export default function Square({ children, onSquareClick }) {
  return (
    <div className="main-badge-container">
      <div className="square">
        <h2>Rectangle : </h2>
        <div className="square-badge-div">
          <Badges shape="square" variant="default" onClick={onSquareClick}>
            {children}
          </Badges>
          <Badges shape="square" variant="red" onClick={onSquareClick}>
            {children}
          </Badges>
          <Badges shape="square" variant="yellow" onClick={onSquareClick}>
            {children}
          </Badges>
          <Badges shape="square" variant="green" onClick={onSquareClick}>
            {children}
          </Badges>
          <Badges shape="square" variant="blue" onClick={onSquareClick}>
            {children}
          </Badges>
          <Badges shape="square" variant="indigo" onClick={onSquareClick}>
            {children}
          </Badges>
          <Badges shape="square" variant="purple" onClick={onSquareClick}>
            {children}
          </Badges>
          <Badges shape="square" variant="pink" onClick={onSquareClick}>
            {children}
          </Badges>
        </div>
      </div>
    </div>
  );
}
