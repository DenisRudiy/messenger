import { useEffect } from "react";
import "./Header.scss";

export function Header() {
  let pointer: HTMLElement;
  useEffect(() => {
    pointer = document.querySelector(".Pointer") as HTMLElement;
  }, []);

  const ClickFirst = () => {
    if (pointer) {
      pointer.style.marginLeft = "22%";
    }
  };
  const ClickSecond = () => {
    if (pointer) {
      pointer.style.marginLeft = "47%";
    } else {
      console.log(pointer);
    }
  };
  const ClickThird = () => {
    if (pointer) {
      pointer.style.marginLeft = "73%";
    }
  };

  return (
    <div className="Header">
      <div className="Info">
        <div className="LogoPart">
          <img
            src="https://i.postimg.cc/TwQQSm37/icons8-message-96-1.png"
            alt=""
          />
          <h1>OniChat</h1>
        </div>
        <div className="SearchPart">
          <button className="Menu">
            <img
              src="https://i.postimg.cc/BQ7C9Hfk/icons8-menu-96-1.png"
              alt=""
            />
          </button>
          <input type="text" className="Search" placeholder="Search" />
          <button className="List">
            <img
              src="https://i.postimg.cc/XYZkVqVJ/icons8-compose-100.png"
              alt=""
            />
          </button>
        </div>
        <div className="ChatsPart">
          <div className="AllChats">
            <button onClick={ClickFirst}>All Chats</button>
            <button onClick={ClickSecond}>Favorite</button>
            <button onClick={ClickThird}>Important</button>
          </div>

          <div className="PointerSection">
            <div className="Pointer"></div>
          </div>
        </div>
      </div>
      <div className="Space"></div>
    </div>
  );
}

export default Header;
