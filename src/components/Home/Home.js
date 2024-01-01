import React from "react";
import "./Home.scss";

const HeaderPart = ({ text, id, special }) => (
  <h2 id={id} className={special ? "special-font" : ""}>
    {text}
  </h2>
);

const Home = () => {
  return (
    <div className="home">
      <HeaderPart text="from" id="header-1" />
      <HeaderPart text="the world" id="header-2" />
      <HeaderPart text="of" id="header-3" />
      <HeaderPart text="industrial" id="header-4" special />
      <HeaderPart text="DESIGN" id="header-5" special />
      <HeaderPart text="to" id="header-6" />
      <HeaderPart text="the dynamic" id="header-7" />
      <HeaderPart text="realm of" id="header-8" />
      <HeaderPart text="TECHNOLOGY" id="header-9" special />
      <HeaderPart text="my journey blends creativity" id="header-10" />
      <HeaderPart text="with tech" id="header-11" />
      <HeaderPart text=" expertise." id="header-12" />
    </div>
  );
};

export default Home;
