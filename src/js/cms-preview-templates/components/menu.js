import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const Menu = ({menu}) => {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <section className="bg-off-white px-2 py-5" id="menu">
      <div className="center">
        <h2 className="mb-4 text-uppercase pb_letter-spacing-2 text-center">
          Menu
        </h2>
        <ul
          className="nav nav-pills mb-3 justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          {menu.map((item, i) => {
            return (
              <li
                className="nav-item nav-item--menu"
                role="presentation"
                key={i}
              >
                <button
                  className={`nav-link nav-link--custom text-uppercase ${
                    currentTab === i ? "active" : ""
                  }`}
                  id={`pills-${item.get("id")}-tab`}
                  data-bs-toggle="pill"
                  type="button"
                  role="tab"
                  aria-selected="false"
                  onClick={() => setCurrentTab(i)}
                >
                  {item.get("heading")}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="tab-content" id="pills-tabContent">
          {(menu || []).map((item, i) => (
            <div
              className={`tab-pane fade food-menu ${
                currentTab === i ? "show active" : ""
              }`}
              id={item.get("id")}
              key={i}
              role="tabpanel"
              aria-labelledby="pills-tab"
            >
              <div className="flex flex-wrap justify-content-between">
                <ReactMarkdown>{item.get("text")}</ReactMarkdown>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;