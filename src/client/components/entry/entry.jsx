import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

import PropTypes from 'prop-types';

import styles from './style.scss';

class Entry extends React.Component {
//   addToCart(event){
//     this.props.addToCart(this.props.displayedProduct);
//   }

  render() {
      if (this.props.tripEntries.length === 0) {
        let listResults = this.props.entries.map( (result, id) => {
            return (
            <div key={id} className={styles.entryContentContainer + " list-group-item px-5"} >
                <div className={styles.entryHeaderText}>
                    <Moment className={styles.entryDateText} format="llll">
                        {result.entry_date}
                    </Moment>
                    <h3>{result.title}</h3>
                    <p className={styles.entryLocationText + " m-0"}><i className="fas fa-map-marker-alt"></i> {result.entry_location}</p>
                    
                </div> 
                <p className={styles.entryContentText}>{result.entry_content}</p>
                <img src={result.media} className={styles.entryImg}/>
            </div>
            )
        });

        return (
            <div className={styles.mainContentContainer + " row overflow-auto"}> 
                {listResults}        
            </div>
          
        );

    } else if (this.props.dayEntries.length === 0) {
        let listResults = this.props.tripEntries.map( (result, id) => {
        
            return (
                <div key={id} className={styles.entryContentContainer + " list-group-item px-5"}>
                <div className={styles.entryHeaderText}>
                    <Moment className={styles.entryDateText} format="llll">
                        {result.entry_date}
                    </Moment>
                    <h3>{result.title}</h3>
                    <p className={styles.entryLocationText + " m-0"}><i className="fas fa-map-marker-alt"></i> {result.entry_location}</p>
                    
                </div> 
                <p className={styles.entryContentText}>{result.entry_content}</p>
                <img src={result.media} className={styles.entryImg}/>
            </div>
            )
        });

        return (
            <div className={styles.mainContentContainer + " row overflow-auto"}> 
              
                {listResults}   
              
            </div>

          
        );
    } else {
        let listResults = this.props.dayEntries.map( (result, id) => {
        
            return (
                <div key={id} className={styles.entryContentContainer + " list-group-item px-5"} >
                <div className={styles.entryHeaderText}>
                    <Moment className={styles.entryDateText} format="llll">
                        {result.entry_date}
                    </Moment>
                    <h3>{result.title}</h3>
                    <p className={styles.entryLocationText + " m-0"}><i className="fas fa-map-marker-alt"></i> {result.entry_location}</p>
                    
                </div> 
                <p className={styles.entryContentText}>{result.entry_content}</p>
                <img src={result.media} className={styles.entryImg}/>
            </div>
            )
        });

        return (
            <div className={styles.mainContentContainer + " row overflow-auto"}> 
              
                {listResults}   
              
            </div>
          
        );
    }
      
  }
}

Entry.propTypes = {
  tripEntries: PropTypes.array,
  dayEntries: PropTypes.array,
  entries: PropTypes.array,
};

export default Entry;