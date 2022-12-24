import React from "react";

const Jumbotron = ({image, title, subtitle}) => {
  return(
    <div
      className="flex bg-center cover vh-100"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex flex-column items-center z-1 self-center w-100 bg-opacity">
        <h1 className="f2 f-6-m di lh-title mb3 white tangerine">{title}</h1>

        {subtitle && (
          <p className="fw3 f4 di lh-title mb3 white mw6">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

export default Jumbotron;