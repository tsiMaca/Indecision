import React from 'react';

const Option = (props) => (
 <div className='option'> 
    <p className='option__text'>{props.count} . {props.optionText}</p>
    
    <div >
      <button
      className="button button--link" 
      onClick={ (e) => {props.handleDeleteOption(props.optionText);
      }}
      >
      remove 
      </button>
    </div>
  </div>
);

export default Option;
