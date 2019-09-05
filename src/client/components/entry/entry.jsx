import React from 'react';

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
            <li key={id} className="list-group-item">
                <p>{result.title}</p> 
                <p>{result.entry_content}</p>
            </li>
            )
        });

        return (
            <div className="searchResults">
              <h1>Journal entries</h1>
              <ul>
                {listResults}   
              </ul>
            </div>
          
        );

    } else {
        let listResults = this.props.tripEntries.map( (result, id) => {
            return (
            <li key={id} className="list-group-item">
                <p>{result.title}</p> 
                <p>{result.entry_content}</p>
            </li>
            )
        });

        return (
            <div className="searchResults">
              <h1>Journal entries</h1>
              <ul>
                {listResults}   
              </ul>
            </div>
          
        );
    }
      
  }
}

// Entry.propTypes = {
//   message: PropTypes.string.isRequired,
// };

export default Entry;