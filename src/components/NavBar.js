import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksEl = links.map((link, index) => {
    return <a key={index} href = {"#" + link}>{link}</a>
  })

  return <nav>{linksEl}</nav>;
}

export default NavBar;
