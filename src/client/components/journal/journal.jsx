import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

class Journal extends React.Component {
  
  render() {
    const { error, isLoaded, journals } = this.props;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else if (!this.props.requested) {
        return (
            <div className={styles.journalContainer}>
              
              <div className={styles.journalHeader + " text-center"}>
                <h5>MY JOURNALS</h5>
              </div>
            
              <div className={styles.journalCardContainer + " row d-flex flex-wrap justify-content-start overflow-auto"}>

                <div className={styles.mycard}>
                  <img className={styles.mycardimg} src="https://www.bestfunforall.com/better/imgs/Black%20&%20White%20Butterfly%20wallpaper%20%202.jpg"/>
                  <button 
                      className={styles.cardAddIcon + " fas fa-plus-square"}
                      onClick={this.props.activateAddMode}>
                    </button>
                  <div className={styles.myCardTitleContainer}> 
                    <p className={styles.addNewCardText}>Add New Diary</p>
                  </div>
                </div>

                {journals.map(journal => (
                  <div key={journal.id} className={styles.mycard}>
                    <img 
                        id={journal.id} 
                        name={journal.journal_name} 
                        onClick={(event) => {
                          this.props.listTripEntries(event);
                          this.props.handleSelect(event);
                          this.props.closeForm();
                        }} 
                        className={styles.mycardimg} 
                        src={journal.cover_img}
                    />
                    
                    <button 
                        className={styles.cardDeleteIcon + " fas fa-times fa-xs"}
                        id={journal.id} 
                        onClick={(event) => {
                          this.props.deleteJournal(event);
                          this.props.deleteAllJournalEntries(event);
                        }}>
                      </button>

                    <div className={styles.myCardTitleContainer}> 
                      <p className={styles.mycardtext}>{journal.journal_name}</p>
                      <button 
                        className={styles.cardEditIcon + " fas fa-edit fa-xs"}
                        id={journal.id} 
                        name={journal.journal_name} 
                        value={journal.cover_img} 
                        onClick={(event) => {
                          this.props.closeForm; 
                          this.props.activateEditMode(event)}}>
                      </button>
                      
                    </div>
                    
                  </div>
                ))}
              </div>
                  
              <Form 
                inAddMode={this.props.inAddMode}
                inEditMode={this.props.inEditMode}
                closeForm={this.props.closeForm}
                journalName={this.props.journalName}
                coverImg={this.props.coverImg}
                nameChangeHandler={this.props.nameChangeHandler}
                coverImgChangeHandler={this.props.coverImgChangeHandler}
                submitAdd={this.props.submitAdd}
                submitEdit={this.props.submitEdit}
              />

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

  render() {
    if (this.props.inAddMode === true) {
      return (

        <div className={styles.formContainerActive + " row"}>
          
          <div className="col-5 pl-0">
            <input 
                type="text" 
                className={styles.formControl} 
                placeholder="Diary Name"
                value={this.props.journalName}
                onChange={(event)=>{this.props.nameChangeHandler(event)}}
            />
          </div>
          <div className="col-5 pl-0">
            <input 
                type="text" 
                className={styles.formControl} 
                placeholder="Cover Image URL"
                value={this.props.coverImg}
                onChange={(event)=>{this.props.coverImgChangeHandler(event)}}
            /> 
          </div>
          
          
          <div className="col-1 p-0">
            <button 
              className={styles.submitAdd + " fas fa-save"}
              onClick={this.props.submitAdd}>
            </button>
          </div>
          <div className="col-1 p-0">
            <button 
              className={styles.formCloseIcon + " fas fa-times fa-xs"}
              onClick={this.props.closeForm}>
            </button>
          </div>
        </div>
      );

    } else if (this.props.inEditMode === true) {
      return (
        <div className={styles.formContainerActive + " row"}>
          
          <div className="col-5 pl-0">
            <input 
                type="text" 
                className={styles.formControl} 
                placeholder="Diary Name"
                value={this.props.journalName}
                onChange={(event)=>{this.props.nameChangeHandler(event)}}
            />
          </div>
          <div className="col-5 pl-0">
            <input 
                type="text" 
                className={styles.formControl} 
                placeholder="Cover Image URL"
                value={this.props.coverImg}
                onChange={(event)=>{this.props.coverImgChangeHandler(event)}}
            /> 
          </div>
          <div className="col-1 p-0">
            <button 
                className={styles.submitAdd + " fas fa-save"}
                onClick={this.props.submitEdit}>
            </button>
          </div>
          <div className="col-1 p-0">
            <button 
              className={styles.formCloseIcon + " fas fa-times fa-xs"}
              onClick={this.props.closeForm}>
            </button>
          </div>
        </div>
        
      );
    } else {
      return (
        <div className={styles.formContainer + " row"}>
          <div className={styles.journalNameText +" col-12 text-center mt-1"}>
            <h5>
              {this.props.journalName}
            </h5>
          </div>
        </div>
      );
    }
  }
}

Journal.propTypes = {
  journals: PropTypes.array,
  listTripEntries: PropTypes.func,
  error: PropTypes.string,
  isLoaded: PropTypes.bool,
  requested: PropTypes.bool,
  inAddMode: PropTypes.bool,
  inEditMode: PropTypes.bool,
  journalName: PropTypes.string,
  coverImg: PropTypes.string,
  activateAddMode: PropTypes.func,
  activateEditMode: PropTypes.func,
  nameChangeHandler: PropTypes.func,
  coverImgChangeHandler: PropTypes.func,
  handleSelect: PropTypes.func,
  closeForm: PropTypes.func,
  deleteJournal: PropTypes.func,
  deleteAllJournalEntries: PropTypes.func,
  handleEdit: PropTypes.func,
  submitEdit: PropTypes.func,
  handleAdd: PropTypes.func,
  submitAdd: PropTypes.func,
};

Form.propTypes = {
  journals: PropTypes.array,
  listTripEntries: PropTypes.func,
  error: PropTypes.string,
  isLoaded: PropTypes.bool,
  requested: PropTypes.bool,
  inAddMode: PropTypes.bool,
  inEditMode: PropTypes.bool,
  journalName: PropTypes.string,
  coverImg: PropTypes.string,
  activateAddMode: PropTypes.func,
  activateEditMode: PropTypes.func,
  nameChangeHandler: PropTypes.func,
  coverImgChangeHandler: PropTypes.func,
  handleSelect: PropTypes.func,
  closeForm: PropTypes.func,
  deleteJournal: PropTypes.func,
  deleteAllJournalEntries: PropTypes.func,
  handleEdit: PropTypes.func,
  submitEdit: PropTypes.func,
  handleAdd: PropTypes.func,
  submitAdd: PropTypes.func,
};



export default Journal;

