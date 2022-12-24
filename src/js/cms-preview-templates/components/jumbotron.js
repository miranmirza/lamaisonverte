import React from "react";

export default class Jumbotron extends React.Component {
  render() {
    const {image, title, subtitle} = this.props;

    return (
      <div
        class="flex bg-center cover vh-100"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div class="flex flex-column items-center z-1 self-center w-100 bg-opacity">
          <h1 class="f2 f-6-m di lh-title mb3 white tangerine">{title}</h1>

          {subtitle && (
            <p class="fw3 f4 di lh-title mb3 white mw6">{subtitle}</p>
          )}
        </div>
      </div>
    );
  }
}
