import React from 'react';

import styles from './style.scss';

class Journal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      requested : false,
      journals: [],
      journalName: null,
      coverImg: null,
      userId: 1
    };
    this.submit = this.submit.bind(this);

  }

  componentDidMount() {
    fetch("http://127.0.0.1:3000/journals")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            journals: result.journals
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
        }
      )
  }

  nameChangeHandler(event){
    console.log("$$$$$$ "+event.target.value);
    this.setState({journalName: event.target.value});

  }

  coverImgChangeHandler(event){
    console.log("******** "+event.target.value);
    this.setState({coverImg: event.target.value});

  }

//   userChangeHandler(event){
//     console.log("@@@@@@@@ "+event.target.value);
//     this.setState({user_id: event.target.value});

//   }

  addNewJournal(journal) {
    console.log("RERERERERERERERERERERERERERERERERRE");
    console.log( journal );
    this.setState(
        {journals:[journal,...this.state.journals], 
        requested: false}
    )
  }

  submit(){
    console.log("WIOW SUBMIT", this.state);

    var data = { 
        "journal_name": this.state.journalName,
        "cover_img": this.state.coverImg,
        "user_id": this.state.userId
    };

    var request = new XMLHttpRequest();

    var componentThis = this;

    request.addEventListener("load", function() {
        console.log("DONE");
        const responseData = JSON.parse( this.responseText );
        console.log(this.responseText)
        console.log( responseData );
        componentThis.addNewJournal( responseData );
        alert("WOW DONE WITYH CREATING THING");
    });
        
    request.open("POST", '/journals/new');
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(data));

    this.setState({requested:true});

  }

  render() {
    const { error, isLoaded, journals } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else if (!this.state.requested) {
        return (
            <React.Fragment>
            <div>
                <div>
                    name:
                    <input onChange={(event)=>{this.nameChangeHandler(event)}}/>
                </div>
                <div>
                    cover:
                    <input onChange={(event)=>{this.coverImgChangeHandler(event)}}/>
                </div>
    
                <button className={"btn btn-primary"} onClick={this.submit}>Add New Diary</button>
            </div>

            <ul>
                {journals.map(journal => (
                <li key={journal.id}>
                    {journal.journal_name} 
                {/* <img src={journal.cover_img}/> */}
                </li>
                ))}
            </ul>
            </React.Fragment>    
            );

    } else {
        return (
            <div>REQUEST IN PROCESS</div>
        );
    }

  }
}
<Journal/>

export default Journal;