import React, { Component } from "react";
import Header from "./Header";
import Link from "next/link";

class Nav extends Component {
  render() {
    return (
      <div>
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Link href="/sell">
          <a>SELL</a>
        </Link>
      </div>
    );
  }
}

export default Nav;
