import React from "react";
import "./App.scss";
import { Chats } from "./Components/Chats/Chats";
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";

function App() {
  return (
    <div className="App">
      <div className="Window">
        <div className="LeftPart">
          <Header />
          <Chats />
        </div>
        <Main />
      </div>
    </div>
  );
}

export default App;
