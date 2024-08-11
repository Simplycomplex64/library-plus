import React from "react";
import Badges from "./Badges";

export default function Pill({ children, onPillClick }) {
  return (
    <div className="main-badge-container">
      <div className="pill">
        <h2>Pill : </h2>
        <div className="pill-badge-div">
          <Badges shape="pill" variant="default" onClick={onPillClick}>
            {children}
          </Badges>
          <Badges shape="pill" variant="red" onClick={onPillClick}>
            {children}
          </Badges>
          <Badges shape="pill" variant="yellow" onClick={onPillClick}>
            {children}
          </Badges>
          <Badges shape="pill" variant="green" onClick={onPillClick}>
            {children}
          </Badges>
          <Badges shape="pill" variant="blue" onClick={onPillClick}>
            {children}
          </Badges>
          <Badges shape="pill" variant="indigo" onClick={onPillClick}>
            {children}
          </Badges>
          <Badges shape="pill" variant="purple" onClick={onPillClick}>
            {children}
          </Badges>
          <Badges shape="pill" variant="pink" onClick={onPillClick}>
            {children}
          </Badges>
        </div>
      </div>
    </div>
  );
}
