import React from 'react';
import { hot } from 'react-hot-loader';
var moment = require('moment');

import Journal from './components/journal/journal';
import Entry from './components/entry/entry';
import List from './components/list/list';

import styles from './style.scss';

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
      dayEntries: [],
      inAddNewEntryMode: false,
      entryTitle: null,
      media: null,
      entryContent: null,
      entryLocation: null,
      entryDate: new Date(),
      userId: 1,
      //for journals
      inEditMode: false,
      inAddMode: false,
      journals: [],
      journalId: null,
      journalName: null,
      coverImg: null,
      createdDate: moment(),
      updatedDate: moment(),

    };

    this.clickHandler = this.clickHandler.bind(this);
    this.newEntryMode = this.newEntryMode.bind(this);
    this.addNewEntry = this.addNewEntry.bind(this);
    this.submitEntry = this.submitEntry.bind(this);
    this.showDateEntries = this.showDateEntries.bind(this);
    this.entryDateChangeHandler = this.entryDateChangeHandler.bind(this);
    this.logChange = this.logChange.bind(this);
    //journal components
    this.submitAdd = this.submitAdd.bind(this);
    this.deleteJournal = this.deleteJournal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.coverImgChangeHandler = this.coverImgChangeHandler.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
    this.activateAddMode = this.activateAddMode.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleSelect = this.handleSelect.bind(this);

  }
  

  componentDidMount() {
    let hosturl = window.location.origin;
    let url = hosturl + "/entries"
    fetch(url)
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
          console.log("load entries error")
        }
      )
      .then(console.log("HEREEEEEEEEE"))
    
    fetch(hosturl + "/journals")
      .then(res => res.json())
      .then(
        (result2) => {
          this.setState({
            isLoaded: true,
            journals: result2.journals
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
          console.log("LOAD journals error")
        }
      )
      
  }

  clickHandler(event) {
    // console.log(this.state.entries)
    console.log("CLICKINGGG")

    let journalId = parseInt(event.target.id);
    console.log(typeof(journalId))
    
    let allEntries = this.state.entries;
    let tripEntries = [];
    allEntries.map(entry => {
      if (entry.journal_id == journalId) {
        tripEntries.push(entry);
        this.setState(
          {tripEntries: tripEntries,
          dayEntries: [],
          currentJournal: journalId,
          inAddNewEntryMode: false}
        )
        
      } else {
        this.setState(
          {tripEntries: tripEntries,
          currentJournal: journalId,
          inAddNewEntryMode: false}
        )
        console.log("NO MATCHHHHH")
      }
    });
  }


  showDateEntries(event) {
    // console.log(this.state.entries)

    let date = event.target.id;
    let formattedDate = moment(date).format("YYYY-MM-DD")
    console.log("FORMATEDDD DATE OF EVENT TARGET " + typeof(formattedDate))
    console.log(formattedDate)
    
    let tripEntries = this.state.tripEntries;
    console.log("TRIP ENTRIESS IS");
    console.log(tripEntries);

    let dayEntries = [];
    
    tripEntries.map(entry => {
      // console.log("ENTRY DATEEES FORMATT")
      // console.log(typeof(entry.entry_date))
      // console.log(moment(entry.entry_date).format("YYYY-MM-DD"))

      let entryDate = moment(entry.entry_date).format("YYYY-MM-DD");
      console.log("ENTRY DATEE ISSSSS")
      console.log(entryDate);

      if ( entryDate == formattedDate) {
        console.log(entry)
        dayEntries.push(entry);
        console.log("DAY ENTRIESSS ARRAY");
        console.log(dayEntries);
        this.setState(
          {dayEntries: dayEntries}, () => {
            console.log(this.state.dayEntries)
          }
        )
        console.log("MATTTCCH!!!");
        // console.log("NEW TRIP ENTRIES ISSS");
        // console.log(this.state.tripEntries)
        
      } else {
        console.log("NO MATCHHHHH")
      }
    });
  }

  newEntryMode() {
    this.setState({inAddNewEntryMode: true});
  }

  addNewEntry(entry) {
    console.log("ENTRYRYRYRYRRYRYRYRRYRYRRY");
    console.log( entry );
    let updatedEntries = [entry, ...this.state.entries];
    let journalId = this.state.currentJournal;
    
    let tripEntries = [];
    this.setState(
      {entries: updatedEntries,
      requested: false,
      inAddNewEntryMode: false}, () => {
        console.log("ENTRIES UPDATED")
      }
    )
    let allEntries = this.state.entries;

    allEntries.map(entry => {
      console.log("MAPPPINNGGGG")
      if (entry.journal_id == journalId) {
        tripEntries.push(entry);
        this.setState(
          {tripEntries: tripEntries,
          currentJournal: journalId,
          inAddNewEntryMode: false}
        )
        
      } else {
        this.setState(
          {tripEntries: tripEntries,
          currentJournal: journalId,
          inAddNewEntryMode: false}
        )
        console.log("NO MATCHHHHH")
      }
    });
  }

  logChange(e) {
    console.log(e.target.value)
    this.setState({[e.target.name]: e.target.value});  
  }

  entryDateChangeHandler(date){
      // let formattedDate = moment(date).format("DD-MM-YYYY")
      // this.setState({entryDate: formattedDate});
      // console.log("DATEEEEEE" + formattedDate)
      // console.log("TYPE ISS " + typeof(formattedDate))
      this.setState({entryDate: date});
      console.log("DATTEEEEE "+ date);
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
        console.log("WOW NEW ENTRY ADDED");
    });
        
    request.open("POST", '/entries/new');
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(data));

    this.setState({requested:true});
    
  }
  
  //for journals

  handleSelect() {
    console.log("SELECTED A JORUANLLLL");
    this.setState({journalName: event.target.name})
  }

  activateAddMode() {
    console.log("ADD MODE");
    this.setState(
      {inAddMode:true,
      inEditMode:false,
      journalName: "",
      coverImg: ""});
  }

  closeForm() {
    this.setState({inAddMode:false});
    this.setState({inEditMode:false});
  }

  nameChangeHandler(event){
    console.log("$$$$$$ "+event.target.value);
    this.setState({journalName: event.target.value});
  }

  coverImgChangeHandler(event){
    console.log("******** "+event.target.value);
    this.setState({coverImg: event.target.value});
  }


  handleDelete(journalId) {
    console.log("DELETE HANDLING");
    const journals = this.state.journals.filter(journal => journal.id !== journalId);
    const entries = this.state.entries.filter(entry => entry.journal_id !== journalId);
    this.setState(
      {journals: journals,
      entries: entries,
      tripEntries: [],
      journalName: "",
      currentJournal: 0,
      requested: false,}
    );
    console.log("DELETE HANDLED")
  };

  deleteJournal(event){
    console.log("WORKKSS" + event.target.id)
    console.log(typeof(event.target.id));
    var data = { 
      "journal_id": event.target.id
    };

    var request = new XMLHttpRequest();

    var componentThis = this;

    request.addEventListener("load", function() {
        console.log("DONE");
        const responseData = JSON.parse( this.responseText );
        console.log(this.responseText)
        console.log( responseData );
        componentThis.handleDelete( responseData );
        console.log("Journal Deleted")
    });
        
    request.open("DELETE", '/journals/delete');
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(data));

    this.setState({requested:true});
  }

  deleteAllJournalEntries(event) {
    var data = { 
      "journal_id": event.target.id
    };
    console.log("DELETEING ALL ENTRIES IN JOURNAL " + event.target.id)
    var request = new XMLHttpRequest();

    var componentThis = this;

    request.addEventListener("load", function() {
        console.log("DONE");
        const responseData = JSON.parse( this.responseText );
        console.log(this.responseText)
        console.log( responseData );
        // componentThis.handleDelete( responseData.id );
        console.log("JOURNAL ENTRIES DELETETETETD");
    });
        
    request.open("DELETE", '/journalentries/delete');
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(data));

    // this.setState({requested:true});
  }

  handleEdit(event) {
    this.setState(
      {inEditMode: true,
      inAddMode: false,
      journalId: event.target.id,
      journalName: event.target.name,
      coverImg: event.target.value,
      requested: false
      }
    );
    console.log("CLICKEDD")
  };

  submitEdit() {
    console.log("EDITTT", this.state);

    var data = { 
        "journal_name": this.state.journalName,
        "cover_img": this.state.coverImg,
        "user_id": this.state.userId,
        "id": this.state.journalId,
        "updated_date": this.state.updatedDate,
    };

    var request = new XMLHttpRequest();

    var componentThis = this;

    request.addEventListener("load", function() {
        console.log("DONE");
        const responseData = JSON.parse( this.responseText );
        console.log(this.responseText)
        console.log( responseData );
        componentThis.handleEdit( responseData );
        console.log("WOW DONE WITYH EDITTINGGN THING");
    });
        
    request.open("PUT", '/journals/edit');
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(data));

    this.setState({requested:true});

    }
  

  handleAdd(journal) {
    console.log("HANDLING ADDDD");
    console.log( journal );
    this.setState(
        {journals:[journal,...this.state.journals], 
        requested: false}
    )
  }


  submitAdd(){
    console.log("WIOW SUBMIT", this.state);

    var data = { 
        "journal_name": this.state.journalName,
        "cover_img": this.state.coverImg,
        "user_id": this.state.userId,
        "created_date": this.state.createdDate
    };

    var request = new XMLHttpRequest();

    var componentThis = this;

    request.addEventListener("load", function(event) {
        console.log("DONE");
        const responseData = JSON.parse( this.responseText );
        console.log(this.responseText)
        console.log( responseData );
        componentThis.handleAdd( responseData );
        event.preventDefault()
        console.log("New journal created!!!");
    });
        
    request.open("POST", '/journals/new');
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(data));

    this.setState({
      requested:true,
      inAddMode: false,
    });

  }



  render() {
    return (
      
      <div className={styles.appContainer}>
 
        <div className="row">
           
          <div className={styles.mySidebar + " col-3 mt-0 p-0"}>
            
            <div className={styles.sideBarHeader + " text-center"}>
              <h3><i class="fas fa-globe-americas"></i> TRAVELIARY</h3>
            </div>
            
            
            <Journal 
              listTripEntries={this.clickHandler}
              error={this.state.error}
              isLoaded={this.state.isLoaded}
              requested={this.state.requested}
              activateAddMode={this.activateAddMode}
              inAddMode={this.state.inAddMode}
              inEditMode={this.state.inEditMode}
              journals={this.state.journals}
              journalName={this.state.journalName}
              coverImg={this.state.coverImg}
              activateAddMode={this.activateAddMode}
              nameChangeHandler={this.nameChangeHandler}
              coverImgChangeHandler={this.coverImgChangeHandler}
              handleSelect={this.handleSelect}
              closeForm={this.closeForm}
              deleteJournal={this.deleteJournal}
              deleteAllJournalEntries={this.deleteAllJournalEntries}
              handleEdit={this.handleEdit}
              submitEdit={this.submitEdit}
              handleAdd={this.handleAdd}
              submitAdd={this.submitAdd}
            />
      
            <List 
              currentJournal={this.state.currentJournal}
              tripEntries={this.state.tripEntries}
              newEntryMode={this.newEntryMode}
              addNewEntry={this.addNewEntry}
              inAddNewEntryMode={this.state.inAddNewEntryMode}
              logChange={this.logChange}
              entryDateChangeHandler={this.entryDateChangeHandler}
              submitEntry={this.submitEntry}
              showDateEntries={this.showDateEntries}
              entryDate={this.state.entryDate}
            />
          </div>
          <div className={styles.mainContentContainer + " col-9"}>
            <div className={styles.mainContentHeader + " row"}>
              <div className="col-12 text-center">
                <h3 className={styles.mainHeaderText}>My Diary Entries</h3>
              </div>
            </div>
            <Entry 
                dayEntries={this.state.dayEntries}
                tripEntries={this.state.tripEntries} 
                entries={this.state.entries}
            />
            
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);

