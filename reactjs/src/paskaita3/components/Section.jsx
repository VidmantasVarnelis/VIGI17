import React from 'react';
import Content from './Content';

const Section = ({ contentDirection }) => {
    return (
        <div className='section'>
            {contentDirection === 'right' ? (
                <>
                    <div className='img_container'>
                        <img src='https://picsum.photos/800' alt='No alt' />
                    </div>
                    <Content
                        heading='ABOUT US'
                        title='Time to Make a Difference'
                        description='Phasellus scelerisque arcu vestibulum tempor tempor. Donec vulputate leo et metus hendrerit bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. In scelerisque nisl nec ornare euismod.'
                    />
                </>
            ) : (
                <>
                    <Content
                        heading='ABOUT US'
                        title='Time to Make a Difference'
                        description='Phasellus scelerisque arcu vestibulum tempor tempor. Donec vulputate leo et metus hendrerit bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. In scelerisque nisl nec ornare euismod.'
                    />
                    <div className='img_container'>
                        <img src='https://picsum.photos/800' alt='No alt' />
                    </div>
                </>
            )}
        </div>
    );
};
export default Section;
