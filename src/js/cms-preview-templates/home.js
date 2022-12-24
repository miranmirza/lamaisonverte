import React from "react";
import format from "date-fns/format";
import ReactMarkdown from "react-markdown";

import Jumbotron from "./components/jumbotron";
import Menu from "./components/menu";

export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image) {
        let {path} = image;
        path = path.split('static/').pop();
        image = `${window.parent.location.protocol}//${window.parent.location.host}/${path}`;
    }
    return (
      <div>
        <Jumbotron
          image={image}
          title={entry.getIn(["data", "title"])}
          subtitle={entry.getIn(["data", "subtitle"])}
        />

        <div className="bg-off-white pv4">
          <div className="ph3 mw7 center">
            <h2 className="f2 b lh-title mb2">
              {entry.getIn(["data", "intro", "heading"])}
            </h2>
            <ReactMarkdown>
              {entry.getIn(["data", "intro", "text"])}
            </ReactMarkdown>

            <Menu menu={entry.getIn(["data", "menu"])} />

            <div className="flex-ns mhn2-ns mb3">
              {(entry.getIn(["data", "products"]) || []).map((product, i) => (
                <div className="ph2-ns w-50-ns" key={i}>
                  <img
                    src={getAsset(product.get("image"))}
                    alt=""
                    className="center db mb3"
                    style={{ width: "240px" }}
                  />
                  <p>{product.get("text")}</p>
                </div>
              ))}
            </div>

            <div className="tc">
              <a href="#" className="btn raise">
                See all products
              </a>
            </div>
          </div>
        </div>

        {/* <div className="bg-grey-1 pv4">
          <div className="ph3 mw7 center">
            <div className="flex-l mhn2-l">
              <div className="w-40-l ph2-l">
                <h2 className="f2 b lh-title mb2">
                  {entry.getIn(["data", "values", "heading"])}
                </h2>

                <p>{entry.getIn(["data", "values", "text"])}</p>
              </div>

              <div className="w-60-l ph2-l">
                <img src="/img/home-about-section.jpg" alt="" className="mb3" />
              </div>
            </div>

            <div className="tc">
              <a href="{{.buttonLink}}" className="btn raise">
                Read more
              </a>
            </div>
          </div>
        </div> */}
        <footer class="pb_footer bg-light">
          <div class="container">
            <div class="row text-center">
              <ul class="list-inline">
                {(entry.getIn(["data", "socials"]) || []).map((social, i) => (
                  <li class="list-inline-item">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={social.get("url")}
                      class="p-2"
                    >
                      <i className={`fa ${social.get("icon")}`}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div class="row text-center">
              <p>© Test. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}