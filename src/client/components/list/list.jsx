import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

// import { GroupBy } from 'react-lodash'

import PropTypes from 'prop-types';

import styles from './style.scss';
import main_styles from '../../style.scss';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          requested : false,
        //   startDate: new Date(),
        //   entryTitle: null,
        //   media: null,
        //   entryContent: null,
        //   entryLocation: null,
        //   entryDate: null,
        //   userId: 1,
        //   journalId: this.props.currentJournal
        };
        // this.handleChange = this.handleChange.bind(this);
    
    }

    // handleChange(date) {
    //     this.setState({
    //       startDate: date
    //     });
    //   };
    
    // entryTitleChangeHandler(event){
    //     console.log("$$$$$$ "+event.target.value);
    //     this.setState({entryTitle: event.target.value});
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

    // entryDateChangeHandler(event){
    //     console.log("$$$$$$ "+event.target.value);
    //     this.setState({entryDate: event.target.value});
    // }



    



    render() {
        //   return (
        //       <div>LISTTTT</div>
        //   )
            let cats = {};
            if (this.props.tripEntries.length === 0) {
                return (
                    <h1> NO LIST </h1>
                )
        
            } else {
                cats = this.props.tripEntries.reduce((catMemo, { entry_date }) => {
                    (catMemo[entry_date] = catMemo[entry_date] || []);
                    return catMemo;
                }, {});
                console.log(cats);
            }
            console.log("catsssss", Object.keys(cats))
            let headers = Object.keys(cats).map((key, index) => {
                let entries = this.props.tripEntries.map((entry, index) => {
                    if (entry.entry_date === key){
                        return <li>{entry.title}</li>
                    }
                })
                return (
                    <React.Fragment key={index}>
                        <h2 date={key} onClick={this.props.showDateEntries}><Moment format="DD">{key}</Moment>th</h2>
                        <ul>
                            {entries}
                        </ul>
                    </React.Fragment>
                    
                )
            });
            
            
            if (!this.props.inAddNewEntryMode) {
                return(
                    <div>
                        <h2>New List</h2>
                        <button onClick={this.props.newEntryMode}>ADD NEW ENTRYYYY</button>
                        {headers}
                    </div>
                )
            } else {
                
                return(
                  <React.Fragment>
                    <div>
                        title:
                        <input onChange={(event)=>{this.props.entryTitleChangeHandler(event)}}/>
                    </div>
                    <div>
                        media:
                        <input onChange={(event)=>{this.props.mediaChangeHandler(event)}}/>
                    </div>
                    <div>
                        content:
                        <input onChange={(event)=>{this.props.entryContentChangeHandler(event)}}/>
                    </div>
                    <div>
                        location:
                        <input onChange={(event)=>{this.props.entryLocationChangeHandler(event)}}/>
                    </div>

                    {/* <div>
                        date:
                        <input onChange={(event)=>{this.props.entryDateChangeHandler(event)}}/>
                    </div> */}
                    Dateeeee:
                    <DatePicker
                        selected={this.props.entryDate}
                        onChange={this.props.entryDateChangeHandler}
                    />
                    

                    <button className={"btn btn-primary"} onClick={this.props.submitEntry}>Add NEW ENTRY</button>
                  </React.Fragment>
                    
                )
            }

      
    }
}

// Entry.propTypes = {
//   message: PropTypes.string.isRequired,
// };

export default List;



// if (!this.props.inAddNewEntryMode) {
//     return(
//         <div>
//             <h2>New List</h2>
//             <button onClick={this.props.addNewEntry}>ADD NEW ENTRYYYY</button>
//             {headers}
//         </div>
//     )
// } else {
//     return(
//         <div>
//             <h1>READY TO ADDD</h1>
//         </div>
//     )
// }