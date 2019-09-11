import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import GoogleApiWrapper from '../../components/map/map';



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
            if (this.props.tripEntries.length === 0 && this.props.currentJournal === 0) {
                return(
                    <div>
                        <h5>Select Diary</h5>
                    </div>
                )
            } else if (this.props.tripEntries.length === 0 && this.props.currentJournal !== 0) {

                if (!this.props.inAddNewEntryMode) {
                    return(
                        <div className={styles.listHeader + " row m-0"}>
                            <button className={styles.newEntryButton + " fas fa-plus"} onClick={this.props.newEntryMode}> Add new entry</button>    
                        </div>
                    )
                } else {
                    
                    return( 
                        //Form for new entry without exisiting entry
                        <div className={styles.formContainer}>
                            <div className={styles.wrapper + " row m-0"}>
                                <GoogleApiWrapper />
                            </div>
                            <div className={styles.newFormHeader + "row m-2"}>
                                <p className="mb-0">New Entry</p>
                                <button className={styles.entrySaveIcon + " fas fa-save"} onClick={this.props.submitEntry}> Save</button>    
                            </div>
                            <div className="row m-2">
                                <div className="input-group mb-1">
                                    <input name="entryTitle" placeholder="Title" onChange={(event)=>{this.props.logChange(event)}}/>         
                                </div>
                            </div>
                            <div className="row m-2">
                                <div className="input-group mb-1">
                                <DatePicker
                                    selected={this.props.entryDate}
                                    onChange={this.props.entryDateChangeHandler}
                                />
                                </div>
                            </div>
                            <div className="row m-2">
                                <div className="input-group mb-1">
                                    <input name="media" placeholder="Photo URL" onChange={(event)=>{this.props.logChange(event)}}/> 
                                </div>
                            </div>
                            <div className="row m-2">
                                <div className="input-group mb-1">
                                    <textarea name="entryContent" placeholder="Entry Content" onChange={(event)=>{this.props.logChange(event)}}/>
                                </div>
                            </div>
                            <div className="row m-2">
                                <div className="input-group mb-1">
                                    <input name="entryLocation" placeholder="Location" onChange={(event)=>{this.props.logChange(event)}}/> 
                                </div>
                            </div>
                            
                        </div>    
                    )
                }
                
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
                            <div className={styles.listEntry + " row m-0"}>
                                <div className={styles.listImgContainer + " col-3 p-0"}>
                                    <img className={styles.listImage} src={entry.media}/>
                                </div>
                                <div className={styles.listContentContainer + " col-9 p-1"}>
                                    <div className="row m-0">
                                        <p className={styles.listEntryTitleText}>{entry.title}</p>   
                                    </div>
                                    <div className={styles.listEntryTextContainer + " m-0 row"}>
                                        <p className={styles.listText}>{entry.entry_content}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
                return (
                    <div className={styles.dateEntriesContainer} key={index}>
                        <div className={styles.entryDateHeader}>
                            <p className={styles.listDateText}>
                                <Moment format="DD MMM YY">{key}</Moment>
                            </p>
                            <button 
                                className={styles.openIcon + " fas fa-book-open"}
                                id={key} 
                                onClick={this.props.showDateEntries}>
                            </button>
                        </div>
                            
                        {entries}
                    </div>
                    
                )
            });
            
            
            if (!this.props.inAddNewEntryMode) {
                return(
                    <React.Fragment>
                    <div className={styles.listHeader + " row m-0"}>
                        <button className={styles.newEntryButton + " fas fa-plus"} onClick={this.props.newEntryMode}> Add new entry</button>    
                    </div>
                    <div className={styles.listContainer + " overflow-auto"}>
                        {headers}
                    </div>
                    </React.Fragment>
                )
            } else {
                return(
                  //Form for new entry with exisiting entries
                  <div className={styles.formContainer}>
                    <div className={styles.wrapper + " row m-0"}>
                        <GoogleApiWrapper />
                    </div>
                    <div className={styles.newFormHeader + "row m-2"}>
                        <p className="mb-0">New Entry</p>
                        <button className={styles.entrySaveIcon + " fas fa-save"} onClick={this.props.submitEntry}> Save</button>    
                    </div>
                    <div className="row m-2">
                        <div className="input-group mb-1">
                            <input name="entryTitle" placeholder="Title" onChange={(event)=>{this.props.logChange(event)}}/>         
                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="input-group mb-1">
                        <DatePicker
                            selected={this.props.entryDate}
                            onChange={this.props.entryDateChangeHandler}
                        />
                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="input-group mb-1">
                            <input name="media" placeholder="Photo URL" onChange={(event)=>{this.props.logChange(event)}}/> 
                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="input-group mb-1">
                            <textarea name="entryContent" placeholder="Entry Content" onChange={(event)=>{this.props.logChange(event)}}/>
                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="input-group mb-1">
                            <input name="entryLocation" placeholder="Location" onChange={(event)=>{this.props.logChange(event)}}/> 
                        </div>
                    </div>
                  </div>   
                )
            }
    }
}

// Entry.propTypes = {
//   message: PropTypes.string.isRequired,
// };

export default List;








