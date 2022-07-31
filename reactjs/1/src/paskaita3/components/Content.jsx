import React from 'react';
import Button from './Button';

const Content = ({ heading, title, description }) => {
    return (
        <div className='content_container'>
            <h4>{heading}</h4>
            <h1>{title}</h1>
            <p>{description}</p>
            <Button />
        </div>
    );
};
export default Content;
