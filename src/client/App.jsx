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
      // journals: [],
    };
    // this.listTripEntries = this.listTripEntries.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    // this.updateCurrentJournal = this.updateCurrentJournal.bind(this);
    this.newEntryMode = this.newEntryMode.bind(this);
    this.addNewEntry = this.addNewEntry.bind(this);
    this.submitEntry = this.submitEntry.bind(this);
    this.showDateEntries = this.showDateEntries.bind(this);

    // this.entryTitleChangeHandler = this.entryTitleChangeHandler.bind(this);
    // this.mediaChangeHandler = this.mediaChangeHandler.bind(this);
    // this.entryContentChangeHandler = this.entryContentChangeHandler.bind(this);
    // this.entryLocationChangeHandler = this.entryLocationChangeHandler.bind(this);
    this.entryDateChangeHandler = this.entryDateChangeHandler.bind(this);
    this.getDate = this.getDate.bind(this);
    this.logChange = this.logChange.bind(this);
    // this.deleteJournal = this.deleteJournal.bind(this);
  }
  
  getDate() {

    // let now = moment().format("YYYY-MM-DD");
    alert (typeof(this.state.entryDate));
    // var date = new Date();
    // alert (`${date.getFullYear()}` + "-" + `${date.getMonth()}` + "-" + `${date.getDate()}`);
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

  // handleDelete(journal) {
  //   const journals = this.state.journals.filter(item => item.id !== itemId);
  //   this.setState({ journals: journals });
  // };

  // deleteJournal(event){
  //   console.log("WORKKSS" + event.target.id)
  //   var data = {
  //       id: event.target.id
  //   }
  //   // fetch("/journals/delete", {
  //   //     method: 'POST',
  //   //     headers: {'Content-Type': 'application/json'},
  //   //     body: JSON.stringify(data)
  //   // }).then(function(response) {
  //   //     if (response.status >= 400) {
  //   //       throw new Error("Bad response from server");
  //   //     }
  //   //     return response.json();
  //   // }).then(function(data) {
  //   //     if(data === "success"){
  //   //        alert("JOURNAL DELETEDD");  
  //   //     }
  //   // }).catch(function(err) {
  //   //     console.log(err)
  //   // });

  //   var request = new XMLHttpRequest();

  //   var componentThis = this;

  //   request.addEventListener("load", function() {
  //       console.log("DONE");
  //       const responseData = JSON.parse( this.responseText );
  //       console.log(this.responseText)
  //       console.log( responseData );
  //       // componentThis.addNewEntry( responseData );
  //       // alert("WOW NEW ENTRY ADDDEDEDEDEDEDED");
  //   });
        
  //   request.open("POST", '/journals/delete');
  //   request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  //   request.send(JSON.stringify(data));

  //   this.setState({requested:true});
    
    
  // }


  logChange(e) {
    console.log(e.target.value)
    this.setState({[e.target.name]: e.target.value});  
  }


  // entryTitleChangeHandler(event){
  //   console.log("$$$$$$ "+event.target.value);
  //   this.setState({entryTitle: event.target.value});
  //   console.log("entry title stateee "+ this.state.entryTitle);
  // }

  // mediaChangeHandler(event){
  //     console.log("$$$$$$ "+event.target.value);
  //     this.setState({media: event.target.value});
  // }

  // entryContentChangeHandler(event){
  //     console.log("$$$$$$ "+event.target.value);
  //     this.setState({entryContent: event.target.value});
  // }

  // entryLocationChangeHandler(event){
  //     console.log("$$$$$$ "+event.target.value);
  //     this.setState({entryLocation: event.target.value});
  // }

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
        alert("WOW NEW ENTRY ADDDEDEDEDEDEDED");
    });
        
    request.open("POST", '/entries/new');
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(data));

    this.setState({requested:true});
    
  }    

  // showWidget(widget) {
  //   widget.open();
  //   // console.log("YEA")
  // }

  // fileChangeHandler(event) {
  //   console.log(event);
  // }

  // Upload() {
  //   const [image, setImage] = useState('')
  //   const [loading, setLoading] = useState(false)
  
  //   const uploadImage = async e => {
  //     const files = e.target.files
  //     const data = new FormData()
  //     data.append('file', files[0])
  //     data.append('upload_preset', 'cphn5mq5')
  //     setLoading(true)
  //     const res = await fetch(
  //       '	https://api.cloudinary.com/v1_1/irockmysock',
  //       {
  //         method: 'POST',
  //         body: data
  //       }
  //     )
  //     const file = await res.json()
  
  //     setImage(file.secure_url)
  //     setLoading(false)
  //   }
  
  //   return (
  //     <div className="App">
  //       <h1>Upload Image</h1>
  //       <input
  //         type="file"
  //         name="file"
  //         placeholder="Upload an image"
  //         onChange={uploadImage}
  //       />
  //       {loading ? (
  //         <h3>Loading...</h3>
  //       ) : (
  //         <img src={image} style={{ width: '300px' }} />
  //       )}
  //     </div>
  //   )
  // }

  render() {
    // let widget = window.cloudinary.createUploadWidget({
    //   cloudName: 'irockmysock', 
    //   uploadPreset: 'cphn5mq5'}, (error, result) => { 
    //     if (!error && result && result.event === "success") { 
    //       console.log('Done! Here is the image info: ', result.info); 
    //     }
    //   }
    // )

    return (
      
      <div className={styles.appContainer}>
 
        <div className="row">
           
          <div className={styles.mySidebar + " col-3 mt-0 p-0"}>
            
            <div className={styles.sideBarHeader + " text-center"}>
              <h3><i class="fas fa-globe-americas"></i> TRAVELIARY</h3>
            </div>
            
            
            <Journal 
              listTripEntries={this.clickHandler}
              // deleteJournal={this.deleteJournal}
            />
      
            <List 
              currentJournal={this.state.currentJournal}
              tripEntries={this.state.tripEntries}
              newEntryMode={this.newEntryMode}
              addNewEntry={this.addNewEntry}
              inAddNewEntryMode={this.state.inAddNewEntryMode}
              // entryTitleChangeHandler={this.entryTitleChangeHandler}
              // mediaChangeHandler={this.mediaChangeHandler}
              // entryContentChangeHandler={this.entryContentChangeHandler}
              // entryLocationChangeHandler={this.entryLocationChangeHandler}
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




{/* <button className={styles.test} onClick={this.showWidget}>WIDGET</button>
            UPLOADDDD
            <input type="file" onChange={this.fileChangeHandler}/> */}