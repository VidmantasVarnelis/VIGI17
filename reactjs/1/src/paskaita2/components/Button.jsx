import React from 'react';

// Reacto komponentai yra kuriami PaascalCase
const Button = (props) => {
    return (
        <button
            onClick={props.onButtonClick}
            className={props.className ? props.className : 'primary_button'}
        >
            {props.text ? props.text : 'Click me!'}
        </button>
    );
};

export default Button;
