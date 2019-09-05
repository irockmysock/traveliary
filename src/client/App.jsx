import React from 'react';
import { hot } from 'react-hot-loader';

import Journal from './components/journal/journal';
import Entry from './components/entry/entry';
// import Counter from './components/counter/counter';
// import Form from './components/form/form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello',
      currentJournal: null
      // journals: [],
    };
    // this.getAllJournals = this.getAllJournals.bind(this);
  }

  // getAllJournals() {
  //   console.log("getting JOURNALSS!!!")
  //   var reactThis = this;
  
  //   var reqListener = function(){
  //     console.log(this.responseText);
      
  //     //transform the response to real js objects
  //     const data = JSON.parse( this.responseText );
  //     console.log(data)
      
  //     // here, we can't do this.setState
      
  //     //refer to react state instead
  //     reactThis.setState({journals: data.journals}, () => {
  //       console.log(this.state)
  //     });
  //   }

  //   var oReq = new XMLHttpRequest();
  //   oReq.addEventListener("load", reqListener);
  //   oReq.open("GET", "http://127.0.0.1:3000/journals");
  //   oReq.send();
  // }


  render() {
    return (
      
      // <div className="container text-center">
       
        <div className="row">
           
          <div className="col-4">
            <Journal />
            {/* <Form /> */}
          </div>
          <div className="col-8">
            <Entry />
            {/* <Counter message={this.state.message} /> */}
          </div>
        </div>
      // </div>
    );
  }
}

export default hot(module)(App);
