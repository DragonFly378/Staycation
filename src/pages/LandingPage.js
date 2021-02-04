import React, { Component } from "react";

import Header from "parts/header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";

import landingPage from "json/landingPage.json";

export default class LandingPage extends Component {
  // buat constructor untuk menjalankan smooth button
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        />
      </>
    );
  }
}
