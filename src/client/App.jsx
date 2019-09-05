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
      currentJournal: null,
      entries: [],
      tripEntries: [],
      // journals: [],
    };
    // this.listTripEntries = this.listTripEntries.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }


  componentDidMount() {
    fetch("http://127.0.0.1:3000/entries")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            entries: result.entries
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
          console.log("ERRORRRRRRRR")
        }
      )
      .then(()=>{
        console.log("entries array isss");
        console.log(this.state.entries);
      })
  }

  clickHandler(event) {
    console.log(this.state.entries)

    let journalId = parseInt(event.target.id);
    console.log(typeof(journalId))
    
    let allEntries = this.state.entries;
    let tripEntries = [];
    allEntries.map(entry => {
      if (entry.journal_id == journalId) {
        console.log(typeof(entry.journal_id))
        
        tripEntries.push(entry);
        this.setState({tripEntries: tripEntries});
        console.log("~~~~~~~~~~~~~~~~~~")
        console.log(this.state.entries);
      } else {
        console.log("NO MATCHHHHH")
      }
    })
  }


  render() {
    return (
      
      <div className="container text-center">
       
        <div className="row">
           
          <div className="col-4">
            <Journal listTripEntries={this.clickHandler}/>
            {/* <Form /> */}
          </div>
          <div className="col-8">
            <Entry tripEntries={this.state.tripEntries} entries={this.state.entries}/>
            {/* <Counter message={this.state.message} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
