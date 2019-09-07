import React from 'react';

import styles from './style.scss';

class Journal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      requested : false,
      inEditMode: false,
      inAddMode: false,
      journals: [],
      journalName: null,
      coverImg: null,
      userId: 1
    };
    this.submit = this.submit.bind(this);
    this.deleteJournal = this.deleteJournal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.coverImgChangeHandler = this.coverImgChangeHandler.bind(this);



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


  handleDelete(journalId) {
    const journals = this.state.journals.filter(journal => journal.id !== journalId);
    this.setState(
      {journals: journals,
      requested: false,}
    );
  };

  handleEdit(journalId) {
    this.setState(
      {inEditMode: true
      }
    );
  };


  deleteJournal(event){
    console.log("WORKKSS" + event.target.id)
    console.log(typeof(event.target.id));
    var data = { 
      "journal_id": event.target.id
    };
    

    fetch("/journals/delete", {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
        if(data === "success"){
           alert("JOURNAL DELETEDD");  
        }
    }).catch(function(err) {
        console.log(err)
    });

    // var request = new XMLHttpRequest();

    // var componentThis = this;

    // request.addEventListener("load", function() {
    //     console.log("DONE");
    //     const responseData = JSON.parse( this.responseText );
    //     console.log(this.responseText)
    //     console.log( responseData );
    //     componentThis.handleDelete( responseData.id );
    //     alert("WOW DELETETETETD");
    // });
        
    // request.open("POST", '/journals/delete');
    // request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // request.send(JSON.stringify(data));

    this.setState({requested:true});
    
    
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
           
                <h2>My Diaries</h2>
                

            <ul>
                {journals.map(journal => (

                <li key={journal.id}>
                    {journal.journal_name} 
                {/* <img src={journal.cover_img}/> */}
                <button id={journal.id} onClick={this.props.listTripEntries}>
                  show journal entries
                </button>
                <button id={journal.id} onClick={this.editJournal}>Edit</button> 
                <button id={journal.id} onClick={this.deleteJournal}>Delete</button>
                </li>
                ))}
            </ul>

            <Form 
              nameChangeHandler={this.nameChangeHandler}
              coverImgChangeHandler={this.coverImgChangeHandler}
              submit={this.submit}
            />
            </React.Fragment>    
            );

    } else {
        return (
            <div>REQUEST IN PROCESS</div>
        );
    }

  }
}


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inEditMode: false,
      inAddMode: false,
    }
    this.activateAddMode = this.activateAddMode.bind(this);
  };

  activateAddMode() {
    console.log("ADD MODE");
    this.setState({inAddMode:true});
  }


  render() {
    if (this.state.inAddMode === true) {
      return (
        <React.Fragment>
          <div>
            name:
            <input onChange={(event)=>{this.props.nameChangeHandler(event)}}/>
          </div>
          <div>
            cover:
            <input onChange={(event)=>{this.props.coverImgChangeHandler(event)}}/>
          </div>

          <button className={"btn btn-primary"} onClick={this.props.submit}>Add New Diary</button>
          
        </React.Fragment>
      );
      } else {
        return (
          <React.Fragment>
            
            <button className={"btn btn-primary"} onClick={this.activateAddMode}>+++</button>
            
          </React.Fragment>
        );
      }
    }
}

export default Journal;