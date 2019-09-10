import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

import PropTypes from 'prop-types';

import styles from './style.scss';
import main_styles from '../../style.scss';

class Entry extends React.Component {
//   addToCart(event){
//     this.props.addToCart(this.props.displayedProduct);
//   }

  render() {
      if (this.props.tripEntries.length === 0) {
        let listResults = this.props.entries.map( (result, id) => {
            return (
            <div key={id} className="list-group-item px-5">
                <div className={styles.entryHeaderText}>
                    <Moment className={styles.entryDateText} format="llll">
                        {result.entry_date}
                    </Moment>
                    <h5>{result.title}</h5>
                </div> 
                <p className={styles.entryContentText}>{result.entry_content}</p>
                <img src={result.media} className={styles.entryImg}/>
            </div>
            )
        });

        return (
            <div className={styles.mainContentContainer + " row"}> 
              <div className={styles.allEntriesContainer}>
                {listResults}   
              </div>
            </div>
          
        );

    } else if (this.props.dayEntries.length === 0) {
        let listResults = this.props.tripEntries.map( (result, id) => {
        
            return (
                <div key={id} className="list-group-item px-5">
                    <div className={styles.entryHeaderText}>
                        <Moment className={styles.entryDateText} format="llll">
                            {result.entry_date}
                        </Moment>
                        <h5>{result.title}</h5>
                    </div> 
                    <p className={styles.entryContentText}>{result.entry_content}</p>
                    <img src={result.media} className={styles.entryImg}/>
                </div>

            )
        });

        return (
            <div className={styles.mainContentContainer + " row"}> 
              <div className={styles.allEntriesContainer}>
                {listResults}   
              </div>
            </div>

          
        );
    } else {
        let listResults = this.props.dayEntries.map( (result, id) => {
        
            return (
                <div key={id} className="list-group-item px-5">
                    <div className={styles.entryHeaderText}>
                        <Moment className={styles.entryDateText} format="llll">
                            {result.entry_date}
                        </Moment>
                        <h5>{result.title}</h5>
                    </div> 
                    <p className={styles.entryContentText}>{result.entry_content}</p>
                    <img src={result.media} className={styles.entryImg}/>
                </div>
            )
        });

        return (
            <div className={styles.mainContentContainer + " row overflow-auto"}> 
              {/* <div className={styles.allEntriesContainer}> */}
                {listResults}   
              {/* </div> */}
            </div>
          
        );
    }
      
  }
}

// Entry.propTypes = {
//   message: PropTypes.string.isRequired,
// };

export default Entry;