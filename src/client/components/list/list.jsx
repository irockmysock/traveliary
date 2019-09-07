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
                        return <li>{entry.title}</li>
                    }
                })
                return (
                    <React.Fragment key={index}>
                        <h2><Moment format="DD">{key}</Moment>th</h2>
                        <button id={key} onClick={this.props.showDateEntries}>SHOW</button>
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



