import React from 'react';
import Button from './Button';

const Card = (props) => {
    return (
        <div>
            <img src='https://picsum.photos/150' alt='' />
            <h1>{props.title}</h1>
            {/* {props.hideButton ? null : <Button text='Click me now!' />} */}
            {!props.hideButton && (
                <Button
                    text='Click me now!'
                    onButtonClick={props.onButtonClick}
                />
            )}
        </div>
    );
};

export default Card;
