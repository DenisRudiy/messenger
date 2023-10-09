import React from "react";
import "./CurrentChat.scss";

export function CurrentChat() {
  return (
    <div className="CurrentChat">
      <div className="ChatMessages">
        <div className="MyMessage">
          <div className="CommonMessage">
            <p className="Message">Hello, Jacob!</p>
            <p className="MyTime">
              9:54 PM
              <img
                src="https://i.ibb.co/Hd3GMDW/icons8-double-tick-50-1.png"
                alt=""
                className="Checkmark"
              />
            </p>
          </div>
        </div>
        <div className="YouMessage">
          <div className="CommonMessage">
            <p className="Message">Hello, Denis!</p>
            <p className="YourTime">9:55 PM</p>
          </div>
        </div>
        <div className="MyMessage">
          <div className="PhotoMessage">
            <img
              src="https://i.postimg.cc/50MsRLBb/photo-1476067897447-d0c5df27b5df.jpg"
              alt=""
            />
            <p className="MyTime">
              9:59 PM
              <img
                src="https://i.ibb.co/Hd3GMDW/icons8-double-tick-50-1.png"
                alt=""
                className="Checkmark"
              />
            </p>
          </div>
        </div>
        <div className="YouMessage">
          <div className="CommonMessage">
            <p className="Message">
              Can you please send me a documents about my credit card? I need to
              send this to my work!
            </p>
            <p className="YourTime">10:05 PM</p>
          </div>
        </div>
        <div className="MyMessage">
          <div className="FileMessage">
            <div className="FileSection">
              <img
                src="https://i.postimg.cc/JzmDpWzy/Rectangle-7.png"
                alt=""
                className="File"
              />
              <div className="FileDetails">
                <p className="FileName">exampledocument.pdf</p>
                <p>410.2KB</p>
              </div>
            </div>
            <p className="MyTime">
              9:55 PM
              <img
                src="https://i.ibb.co/Hd3GMDW/icons8-double-tick-50-1.png"
                alt=""
                className="Checkmark"
              />
            </p>
          </div>
        </div>
        <div className="MyMessage">
          <div className="CommonMessage">
            <p className="Message">Here you go, let me know how it goes)</p>
            <p className="MyTime">
              9:54 PM
              <img
                src="https://i.ibb.co/Hd3GMDW/icons8-double-tick-50-1.png"
                alt=""
                className="Checkmark"
              />
            </p>
          </div>
        </div>
      </div>
      <div className="ChatInput">
        <div className="ChatInputContainer">
          <button className="InputButton">
            <img
              src="https://i.postimg.cc/jjDKtF2s/icons8-paper-clip-64-1.png"
              alt=""
            />
          </button>
          <input type="text" placeholder="Write a message" />
          <button className="InputButton">
            <img
              src="https://i.postimg.cc/MGVP77r7/icons8-happy-96.png"
              alt=""
            />
          </button>
          <button className="InputButton">
            <img
              src="https://i.postimg.cc/rwFMYmLR/icons8-microphone-96.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CurrentChat;
