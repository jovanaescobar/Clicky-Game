import React, { Component } from "react";
import Donuts from "./components/Donuts";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import sweets from "./donuts.json";


class App extends Component {
  // Setting this.state.donuts to the donuts json array
  state = {
    sweets,
    clickedDonutId: [],
    total: 0,
    goal: 8
  };



 // Map over this.state.donuts and render a donut card component for each donut object
  render() {
    return (
      <div className="App">

      <Wrapper>
        <Score total={this.state.total}
        goal={8} />
        
        {this.state.sweets.map(donut => (
          <Donuts
            shuffleDonuts={this.shuffleDonuts}
            id={donut.id}
            key={donut.id}
            image={donut.image}
         
          />
        ))}
      </Wrapper>

      </div>
    );
  }
}

export default App;
