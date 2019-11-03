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

  shuffleDonuts = id => {
    // Filter this.state.donuts for donuts with an id not equal to the id being removed
    let clickedDonutId = this.state.clickedDonutId;

    if(clickedDonutId.includes(id)){
      this.setState({clickedDonutId: [], total: 0});
      return;

    } else {
      clickedDonutId.push(id)

      if(clickedDonutId.length === 8){
        this.setState({total: 8, clickedDonutId: []});
        console.log('You Win');
        return;
      }
    
    // Set this.state.donuts equal to the new donuts array
    this.setState({ sweets, clickedDonutId, total: clickedDonutId.length});


  for (let i = sweets.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [sweets[i], sweets[j]] = [sweets[j], sweets[i]];
  }
  }
  }

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
