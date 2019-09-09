import React from 'react';
var moment = require('moment');

import styles from './style.scss';

class Journal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      requested : false,
      inEditMode: false,
      journals: [],
      journalId: null,
      journalName: null,
      coverImg: null,
      createdDate: moment(),
      updatedDate: moment(),
      userId: 1
    };
    this.submitAdd = this.submitAdd.bind(this);
    this.deleteJournal = this.deleteJournal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.coverImgChangeHandler = this.coverImgChangeHandler.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.submitEdit = this.submitEdit.bind(this);

    

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

  deleteJournal(event){
    console.log("WORKKSS" + event.target.id)
    console.log(typeof(event.target.id));
    var data = { 
      "journal_id": event.target.id
    };

    // fetch("/journals/delete", {
    //     method: 'DELETE',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify(data)
    // }).then(function(response) {
    //     if (response.status >= 400) {
    //       throw new Error("Bad response from server");
    //     }
    //     return response.json();
    // }).then(function(data) {
    //     if(data === "success"){
    //        alert("JOURNAL DELETEDD");  
    //     }
    // }).catch(function(err) {
    //     console.log(err)
    // });

    var request = new XMLHttpRequest();

    var componentThis = this;

    request.addEventListener("load", function() {
        console.log("DONE");
        const responseData = JSON.parse( this.responseText );
        console.log(this.responseText)
        console.log( responseData );
        componentThis.handleDelete( responseData );
        // alert("Journal Deleted");
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
        componentThis.handleDelete( responseData.id );
        console.log("JOURNAL ENTRIES DELETETETETD");
    });
        
    request.open("DELETE", '/journalentries/delete');
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(data));

    this.setState({requested:true});
  }

  handleEdit(event) {
    this.setState(
      {inEditMode: true,
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

    // var componentThis = this;

    request.addEventListener("load", function() {
        console.log("DONE");
        const responseData = JSON.parse( this.responseText );
        console.log(this.responseText)
        console.log( responseData );
        // componentThis.handleEdit( responseData );
        alert("WOW DONE WITYH EDITTINGGN THING");
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
            <div className={styles.journalContainer}>
              <div className={styles.journalHeader}>
                <h5>MY JOURNALS</h5>
              </div>
            
                <div className={styles.journalCardContainer + " row d-flex flex-wrap justify-content-start overflow-auto"}>

                  {journals.map(journal => (
                    <div key={journal.id} className={styles.mycard}>
                      <img id={journal.id} onClick={this.props.listTripEntries} className={styles.mycardimg} src={journal.cover_img}/>
                      
                      <button 
                          className={styles.cardDeleteIcon + " fas fa-times fa-xs"}
                          id={journal.id} 
                          onClick={(event) => {
                            this.deleteJournal(event);
                            this.deleteAllJournalEntries(event);
                          }}>
                        </button>

                      <div className={styles.myCardTitleContainer}> 
                        <p className={styles.mycardtext}>{journal.journal_name}</p>
                        <button 
                          className={styles.cardEditIcon + " fas fa-edit fa-xs"}
                          id={journal.id} 
                          name={journal.journal_name} 
                          value={journal.cover_img} 
                          onClick={this.handleEdit}>
                        </button>
                        
                      </div>
                      
                      {/* <div className={styles.mycardfooter + " d-flex justify-content-between"}>  */}
                        {/* <button 
                          className={styles.cardEditIcon + " fas fa-edit fa-xs"}
                          id={journal.id} 
                          name={journal.journal_name} 
                          value={journal.cover_img} 
                          onClick={this.handleEdit}>
                        </button> */}
                        
                        
                      {/* </div> */}

                    </div>
                  ))}
                </div>

                <div className="mycontainer">
                  
                  <Form 
                    inEditMode={this.state.inEditMode}
                    journalName={this.state.journalName}
                    coverImg={this.state.coverImg}
                    nameChangeHandler={this.nameChangeHandler}
                    coverImgChangeHandler={this.coverImgChangeHandler}
                    submitAdd={this.submitAdd}
                    submitEdit={this.submitEdit}
                    />
                </div>

              

            </div>
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
        <div classname="container">
          <div classname="input-group">
            <div classname="input-group-prepend">
              <span classname="input-group-text" id="">Diary Name</span>
            </div>
            <input type="text" classname="form-control" onChange={(event)=>{this.props.nameChangeHandler(event)}}/>
          </div>
          <div classname="input-group justify-content-between">
            <div classname="input-group-prepend">
              <span classname="input-group-text" id="">Cover Image</span>
            </div>
            <input type="text" classname="form-control" onChange={(event)=>{this.props.coverImgChangeHandler(event)}}/>
            UPLOAD
            <input type="file" onChange={(event)=>{this.props.coverImgChangeHandler(event)}}/>
            
          </div>

          <button className={"btn btn-primary"} onClick={this.props.submitAdd}>Add New Diary</button>


          
        </div>
      );
      } else if (this.props.inEditMode === true) {
        return (
          <div classname="container">
            <div>
              name:
              <input value={this.props.journalName} onChange={(event)=>{this.props.nameChangeHandler(event)}}/>
            </div>
            <div>
              cover:
              <input value={this.props.coverImg} onChange={(event)=>{this.props.coverImgChangeHandler(event)}}/>
            </div>

            <button className={"btn btn-primary"} onClick={this.props.submitEdit}>EDITT Diary</button>
          </div>
        );
      } else {
        return (
          <div classname="container">
            
            <button className={styles.addButton + " fas fa-plus-square"} onClick={this.activateAddMode}></button>
            
          </div>
        );
      }
    }
}

export default Journal;



// function submitPhoto(){
//     var formData = new FormData();
//     console.log(this.files)
//     if (this.files && this.files.length === 1){
//         var file = this.files[0]
//         var fileName = file.name
//         var ext = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();
//         if (ext == "png" || ext == "jpeg" || ext == "jpg") {
//             //Perform Ajax
        
//             formData.set("file", file , fileName);
//             var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
//             xmlhttp.addEventListener("load", function(){
//                 // let previewContainer = document.getElementById("card-preview");
//                 // document.getElementById("card-preview-text").style.display='none';
//                 // previewContainer.style.backgroundImage= `url(${this.responseText})`;
//                 // previewContainer.style.backgroundSize = 'cover';
//                 // let uploadForm = document.getElementById('upload-form');
//                 // if (uploadForm.children.length <=1){
//                 //     let button = document.createElement('button');
//                 //     button.innerText = "Upload Business Card";
//                 //     button.className = "btn upload-btn";
//                 //     uploadForm.appendChild(button);
//                 // }
//             });
//             xmlhttp.open("POST", '/uploadCloudinary');
//             xmlhttp.send(formData);
//         } else {
//             document.getElementById("card-preview-text").innerText="-- Error in file 1 --";
//         }
//     } else {
//         document.getElementById("card-preview-text").innerText="-- Error in file 2 --";
//     }
// }