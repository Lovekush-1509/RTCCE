import React, { useState, useEffect } from "react";
import program from "../Controllers/program";
import burgerimage from "../media/Images/menu-burger.png";
import DropdownMenu from "./Dropdownmenu";

const Codingsection = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 60, height: 100 });
  const [isResizing, setIsResizing] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  // main state variables
  const [language, setlanguage] = useState(null);
  const [languages, setlanguages] = useState("null");
  const [content, setcontent] = useState('');

  const handleBurgerClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMenuPosition({
      x: rect.left - 60,
      y: rect.bottom,
    });
    setIsMenuVisible((prev) => !prev);
  };

  const handleMouseDown = (e) => {
    setIsResizing(true);
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isResizing) return;

    const dx = e.clientX - startPos.x;

    setDimensions((prev) => ({
      width: Math.max(10, prev.width + (dx / window.innerWidth) * 100),
    }));

    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  // main functions
  const handleselectchange = (e) => {
    if(e.target.value === language) return;
    setlanguage(e.target.value);

  };

  useEffect(() => {
    if (language) {
      // const response = await
    }
  }, [language]);

  useEffect(() => {
    if (!languages) {
      const response = program.getlanguages("/get-languages");
      console.log(response);
    }
  }, []);
  return (
    <div
      className="resizable-container"
      style={{
        width: `${dimensions.width}%`,
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="inner-navbar">
        <span>
          <strong style={{ fontSize: "30px" }}>RC</strong>
          <strong style={{ color: "tomato" }}>code_EDITOR</strong>
        </span>
        <ul className="inner-nav-list">
          {/* <img src={burgerimage} alt="Icon" width="20" height="20"> */}

          <li
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: "4px",
            }}
          >
            <select
              id="coding-languages"
              name="languages"
              onChange={handleselectchange}
            >
              <option value="">C++</option>
              <option value="">C</option>
              <option value="">java</option>
              <option value="">javaScript</option>
            </select>
          </li>
          <li style={{ alignSelf: "flex-end" }} onClick={handleBurgerClick}>
            <img src={burgerimage} alt="image" width="25px" />
          </li>
          <DropdownMenu
            isVisible={isMenuVisible}
            position={menuPosition}
            onClose={() => setIsMenuVisible(false)}
          />
        </ul>
      </div>
      <div className="content content-area textarea">
        <textarea
        placeholder="Code here..."
          style={{
            resize: "none",
            overflow: "auto",
            flex: "1",
            padding: " 5px 10px",
            background: "#04181ef8",
            color: "white",
          }}
          value={content}
          onChange={(e) => {
            e.preventDefault();
            setcontent(e.target.value);
          }}
        >
          this is text area
        </textarea>
      </div>
      <button
        className="run-button"
        onClick={(e) => {
          e.preventDefault();
          if (!language || !content) {
            alert("please select language or check your content not be empty");
            return;
          }
          const response = program.getoutput("/output", content, language);
          if (response.success) {
            console.log(response.data);
          }
        }}
      >
        run code
      </button>
      <div className="resizer" onMouseDown={handleMouseDown}></div>
    </div>
  );
};

export default Codingsection;
