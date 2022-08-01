import React from 'react';

const Wrapper = ({ children }) => {
    return (
        <div style={{ backgroundColor: 'lightblue', padding: '1rem' }}>
            {children}
        </div>
    );
};

export default Wrapper;
