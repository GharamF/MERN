import React from 'react';

const Word = props => {
    return(
    <div>
            <h1 style={{background: props.bgColor,   border: '1px dashed black' ,color: props.color}} > The Word is : {props.word}  </h1>
    </div>)
}
export default Word ;