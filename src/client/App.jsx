import React from 'react';
import { hot } from 'react-hot-loader';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker-cssmodules.css";
// import Moment from 'react-moment';
// import 'moment-timezone';

import Journal from './components/journal/journal';
import Entry from './components/entry/entry';
import List from './components/list/list';

// import Counter from './components/counter/counter';
// import Form from './components/form/form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello',
      error: null,
      isLoaded: false,
      requested : false,
      currentJournal: 0,
      entries: [],
      tripEntries: [],
      inAddNewEntryMode: false,
      entryTitle: null,
      media: null,
      entryContent: null,
      entryLocation: null,
      entryDate: new Date(),
      userId: 1,
      // journals: [],
    };
    // this.listTripEntries = this.listTripEntries.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    // this.updateCurrentJournal = this.updateCurrentJournal.bind(this);
    this.newEntryMode = this.newEntryMode.bind(this);
    this.addNewEntry = this.addNewEntry.bind(this);
    this.submitEntry = this.submitEntry.bind(this);
    this.showDateEntries = this.showDateEntries.bind(this);

    this.entryTitleChangeHandler = this.entryTitleChangeHandler.bind(this);
    this.mediaChangeHandler = this.mediaChangeHandler.bind(this);
    this.entryContentChangeHandler = this.entryContentChangeHandler.bind(this);
    this.entryLocationChangeHandler = this.entryLocationChangeHandler.bind(this);
    this.entryDateChangeHandler = this.entryDateChangeHandler.bind(this);


    

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
      // .then(()=>{
      //   console.log("entries array isss");
      //   console.log(this.state.entries);
      // })
  }

  clickHandler(event) {
    // console.log(this.state.entries)

    let journalId = parseInt(event.target.id);
    console.log(typeof(journalId))
    
    let allEntries = this.state.entries;
    let tripEntries = [];
    allEntries.map(entry => {
      if (entry.journal_id == journalId) {
        tripEntries.push(entry);
        this.setState(
          {tripEntries: tripEntries,
          currentJournal: journalId}
        )
        
      } else {
        this.setState(
          {tripEntries: tripEntries,
          currentJournal: journalId}
        )
        console.log("NO MATCHHHHH")
      }
    });
  }


  showDateEntries(event) {
    // console.log(this.state.entries)

    let date = event.target.date;
    console.log(typeof(date))
    
    let tripEntries = this.state.tripEntries;
    let dayEntries = [];
    tripEntries.map(entry => {
      if (entry.entry_date == date) {
        dayEntries.push(entry);
        this.setState(
          {tripEntries: dayEntries}
        )
        
      } else {
        console.log("NO MATCHHHHH")
      }
    });
  }

  // updateCurrentJournal() {
  //   if (this.state.tripEntries.length == 0) {
  //     this.setState({currentJournal: this.state.tripEntries[0].journal_id});
  //   } else {
  //     this.setState({currentJournal})
  //   }
  // }

  newEntryMode() {
    this.setState({inAddNewEntryMode: true});
  }

  addNewEntry(entry) {
    console.log("ENTRYRYRYRYRRYRYRYRRYRYRRY");
    console.log( entry );
    this.setState(
        {entries:[entry, ...this.state.entries], 
        requested: false,
        inAddNewEntryMode: false}
    )
  }



  entryTitleChangeHandler(event){
    console.log("$$$$$$ "+event.target.value);
    this.setState({entryTitle: event.target.value});
    console.log("entry title stateee "+ this.state.entryTitle);
  }

  mediaChangeHandler(event){
      console.log("$$$$$$ "+event.target.value);
      this.setState({media: event.target.value});
  }

  entryContentChangeHandler(event){
      console.log("$$$$$$ "+event.target.value);
      this.setState({entryContent: event.target.value});
  }

  entryLocationChangeHandler(event){
      console.log("$$$$$$ "+event.target.value);
      this.setState({entryLocation: event.target.value});
  }

  entryDateChangeHandler(date){
      this.setState({entryDate: date});
      console.log("DATEEEEEE" + date)
  }


  submitEntry() {
    console.log("WIOW SUBMITENTRYYY", this.state);

    var data = { 
        "title": this.state.entryTitle,
        "media": this.state.media,
        "entry_content": this.state.entryContent,
        "entry_location": this.state.entryLocation,
        "entry_date": this.state.entryDate,
        "user_id": this.state.userId,
        "journal_id": this.state.currentJournal
    };

    var request = new XMLHttpRequest();

    var componentThis = this;

    request.addEventListener("load", function() {
        console.log("DONE");
        const responseData = JSON.parse( this.responseText );
        console.log(this.responseText)
        console.log( responseData );
        componentThis.addNewEntry( responseData );
        alert("WOW NEW ENTRY ADDDEDEDEDEDEDED");
    });
        
    request.open("POST", '/entries/new');
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(data));

    this.setState({requested:true});
    
  }    


  render() {
    return (
      
      <div className="container text-center">
       
        <div className="row">
           
          <div className="col-6">
            <Journal listTripEntries={this.clickHandler}/>
            <List 
              currentJournal={this.state.currentJournal}
              tripEntries={this.state.tripEntries}
              newEntryMode={this.newEntryMode}
              addNewEntry={this.addNewEntry}
              inAddNewEntryMode={this.state.inAddNewEntryMode}
              entryTitleChangeHandler={this.entryTitleChangeHandler}
              mediaChangeHandler={this.mediaChangeHandler}
              entryContentChangeHandler={this.entryContentChangeHandler}
              entryLocationChangeHandler={this.entryLocationChangeHandler}
              entryDateChangeHandler={this.entryDateChangeHandler}
              submitEntry={this.submitEntry}
              showDateEntries={this.showDateEntries}
              entryDate={this.state.entryDate}
            />
          </div>
          <div className="col-6">
            Journal entries
            <Entry tripEntries={this.state.tripEntries} entries={this.state.entries}/>
            {/* <Counter message={this.state.message} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
