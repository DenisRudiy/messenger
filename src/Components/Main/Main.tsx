import React from "react";
import "./Main.scss";
import { CurrentChat } from "../CurrentChat/CurrentChat";

export function Main() {
  return (
    <div className="Main">
      <div className="MainHeader">
        <div className="ChatName">
          <img src="https://i.postimg.cc/nL6qFNFZ/Saved-messages.png" alt="" />
          <h1 className="Name">Saved Messages</h1>
        </div>
        <div className="ChatOptions">
          <button className="OptionBtn">
            <img
              src="https://i.postimg.cc/dVzmDF19/icons8-search-96-2.png"
              alt=""
            />
          </button>
          <button className="OptionBtn">
            <img
              src="https://i.postimg.cc/WbnKdwqx/icons8-3-dots-100.png"
              alt=""
            />
          </button>
        </div>
      </div>
      <div className="MainContent">
        <CurrentChat />
      </div>
    </div>
  );
}

export default Main;
