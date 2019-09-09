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
          requested : false

        };
        // this.handleChange = this.handleChange.bind(this);
    
    }

    render() {
        //   return (
        //       <div>LISTTTT</div>
        //   )
            let cats = {};
            if (this.props.tripEntries.length === 0) {


                if (!this.props.inAddNewEntryMode) {
                    return(
                        <div>
                            <h2>NOOO LISTTT</h2>
                            {/* <button onClick={this.props.newEntryMode}>ADD NEW ENTRYYYY</button> */}
                            {headers}
                        </div>
                    )
                } else {
                    
                    return(
                      <React.Fragment>
                        <div>
                            title:
                            <input name="entryTitle" onChange={(event)=>{this.props.logChange(event)}}/>
                        </div>
                        <div>
                            media:
                            <input name="media" onChange={(event)=>{this.props.logChange(event)}}/>
                        </div>
                        <div>
                            content:
                            <input name="entryContent" onChange={(event)=>{this.props.logChange(event)}}/>
                        </div>
                        <div>
                            location:
                            <input name="entryLocation" onChange={(event)=>{this.props.logChange(event)}}/>
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
                // return (
                //   <React.Fragment>
                //     <h1> NO LIST </h1>
                //     <button onClick={this.props.newEntryMode}>ADD NEW ENTRYYYY</button>
                //   </React.Fragment>
                // )
        
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
                        return (
                            // <div className="row">
                            <React.Fragment>
                                <div className={styles.listImgContainer + " col-3 p-0"}>
                                    <img className={styles.listImage} src={entry.media}/>
                                </div>
                                <div className="col-9">
                                    {entry.title}
                                </div>
                            </React.Fragment>
                            // </div>
                        )
                    }
                })
                return (
                    <div className={styles.listDate} key={index}>
                        <h5 className={styles.listDate}>
                            <Moment format="DD MMM YY">{key}</Moment>
                        </h5>
                        <button 
                            className={styles.openIcon + " fas fa-book-open"}
                            id={key} 
                            onClick={this.props.showDateEntries}>
                        </button>
                        <div className={styles.listEntry + " row m-0"}>
                            {entries}
                        </div>
                    </div>
                    
                )
            });
            
            
            if (!this.props.inAddNewEntryMode) {
                return(
                    <React.Fragment>
                    <div className={styles.dateEntryHeader + " row m-1"}>
                        <h5>{this.props.tripEntries[0].entry_location}</h5>
                        <button onClick={this.props.newEntryMode}>ADD NEW ENTRYYYY</button>    
                    </div>
                    <div className={styles.dateEntryList}>
                        {headers}
                    </div>
                    </React.Fragment>
                )
            } else {
                
                return(
                  <React.Fragment>
                    <div>
                        title:
                        <input name="entryTitle" onChange={(event)=>{this.props.logChange(event)}}/>
                    </div>
                    <div>
                        media:
                        <input name="media" onChange={(event)=>{this.props.logChange(event)}}/>
                    </div>
                    <div>
                        content:
                        <input name="entryContent" onChange={(event)=>{this.props.logChange(event)}}/>
                    </div>
                    <div>
                        location:
                        <input name="entryLocation" onChange={(event)=>{this.props.logChange(event)}}/>
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



