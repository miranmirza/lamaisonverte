import React from "react";
import format from "date-fns/format";
import ReactMarkdown from "react-markdown";

import Jumbotron from "./components/jumbotron";
import Menu from "./components/menu";

export default class HomePreview extends React.Component {
  render() {
    const { entry, getAsset } = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image) {
      let { path } = image;
      path = path.split("static/").pop();
      image = `${window.parent.location.protocol}//${window.parent.location.host}/${path}`;
    }
    return (
      <div>
        <link href="https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css" rel="stylesheet"
          integrity="sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY=" crossorigin="anonymous"></link>
        <Jumbotron
          image={image}
          title={entry.getIn(["data", "title"])}
          subtitle={entry.getIn(["data", "subtitle"])}
        />
        <section class="bg-off-white px-4 py-5" id="about">
          <div class="center">
            <h2 class="mb-4 text-uppercase pb_letter-spacing-2">
              {entry.getIn(["data", "intro", "heading"])}
            </h2>
            <div class="intro-text">
              <ReactMarkdown>
                {entry.getIn(["data", "intro", "text"])}
              </ReactMarkdown>
            </div>
          </div>
        </section>

        <Menu menu={entry.getIn(["data", "menu"])} />
 
        <section class="bg-off-white px-4 py-5 gallery" id="gallery">
            <div class="container center">
                <h2 class="mb-4 text-uppercase pb_letter-spacing-2 text-center">Gallery</h2>
                <ul>
                    {(entry.getIn(["data", "gallery"]) || []).map((product, i) => (
                    <li>
                        <img src={getAsset(product.get("imgSrc"))} class="img-fluid rounded-0" loading="lazy" />
                    </li>
                    ))}
                </ul>
            </div>
        </section>

        <footer className="pb_footer bg-light">
          <div className="container">
            <div className="row text-center">
              <ul className="list-inline">
                {(entry.getIn(["data", "socials"]) || []).map((social, i) => (
                  <li className="list-inline-item" key={i}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={social.get("url")}
                      className="p-2"
                    >
                      <i className={`fa ${social.get("icon")}`}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="row text-center">
              <p>
                © {format(new Date(), 'yyyy')}{" "}
              {entry.getIn(["data", "title"])}. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}