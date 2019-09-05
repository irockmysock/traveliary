import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
// import { GroupBy } from 'react-lodash'

import PropTypes from 'prop-types';

import styles from './style.scss';
import main_styles from '../../style.scss';

class List extends React.Component {
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
                    <h2><Moment format="DD">{key}</Moment>th</h2>
                    <ul>
                        {entries}
                    </ul>
                </React.Fragment>
                
            )
        });
        
        return(
            <div>
                <h2>New List</h2>
                {headers}
            </div>
        )
        //     let AHH = cats.keys(entry_date).map((keyName, i) => {
        //         return (
        //             <li className="travelcompany-input" key={i}>
        //                 <span className="input-label">key: {i} Name: {entry_date[keyName]}</span>
        //             </li>
        //         )
        //     });

        //     return (
        //         <div className="searchResults">
        //           <h1>Journal entries</h1>
        //           <ul>
        //             {AHH}   
        //           </ul>
        //         </div>
              
        //     );
           
            //     {cats.keys(subjects).map((keyName, i) => (
            //     <li className="travelcompany-input" key={i}>
            //         <span className="input-label">key: {i} Name: {subjects[keyName]}</span>
            //     </li>
            // ))}

            //   const groups = _.groupBy(this.props.tripEntries,  'entry_location');

            //   console.log(groups);
            //   return (
            //     <h1>RESULTSSSS</h1>
            //   )
        // }
        // let listResults = this.props.tripEntries.map( (result, id) => {
        //     if (result.entry_date)
        //     return (
        //     <li key={id} className="list-group-item">
        //         <Moment format="DD/MM">
        //             {result.entry_date}
        //         </Moment>
        //         <p>{result.title}</p> 
        //         <p>{result.entry_content}</p>
        //     </li>
        //     )
        // });

        // return (
        //     <div className="searchResults">
        //       <h1>Journal entries</h1>
        //       <ul>
        //         {listResults}   
        //       </ul>
        //     </div>
          
        // );
    //   }
      
  }
}

// Entry.propTypes = {
//   message: PropTypes.string.isRequired,
// };

export default List;