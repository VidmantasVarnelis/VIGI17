import React from 'react';
import Button from './components/Button';
import Content from './components/Content';
import Section from './components/Section';
import Wrapper from './components/Wrapper';
import './Paskaita3.css';

const Paskaita3 = () => {
    const array = ['CodeAcademy', 'Vidmantas2', 'Trecias itemas'];
    const testVariable = 'Test';

    const headingStyles = () => {
        if (testVariable === 'Test') {
            return { color: 'orange' };
        }
        return { color: 'black' };
    };

    return (
        <div>
            {/* <Wrapper>
                {array.map((item, index) => {
                    return (
                        <div key={item}>
                            <button>{item}</button>
                        </div>
                    );
                })}
            </Wrapper>
            {array.map((item) => {
                return <Button key={item} title={item} />;
            })} */}
            {/* <Button title='CodeAcademy' />
            <Button />
            <Button /> */}
            <h1
                // style={{ color: testVariable === 'Test' ? 'orange' : 'black' }}
                style={headingStyles()}
                className={testVariable === 'Test' ? 'Testuoju' : 'test'}
            >
                Testuoju
            </h1>
            <Section contentDirection='right' />
            <Section contentDirection='left' />
            <Section contentDirection='right' />
        </div>
    );
};

export default Paskaita3;
