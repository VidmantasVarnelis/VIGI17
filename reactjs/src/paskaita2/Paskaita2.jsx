import React from 'react';
import Card from './components/Card';
import Nav from './components/Nav';
import './paskaita2.css';

const Paskaita2 = () => {
    // paprasta js funkcija naudoja camelCase
    const showAlert = (text) => {
        console.log(text);
        alert(text);
    };

    return (
        <div>
            <Nav />
            <div className='card'>
                <Card
                    title='First Card'
                    onButtonClick={() =>
                        showAlert('Paspaudziau pirmas kortele')
                    }
                />
                <Card
                    title='Second Card'
                    onButtonClick={() => showAlert('Paspaudziau antra kortele')}
                />
                <Card title='Third Card' hideButton={true} />
                <Card
                    title='Second Card'
                    onButtonClick={() =>
                        showAlert('Paspaudziau ketvirta kortele')
                    }
                />
                <Card
                    title='Second Card'
                    onButtonClick={() =>
                        showAlert('Paspaudziau penkta kortele')
                    }
                />
                <Card
                    title='Second Card'
                    onButtonClick={() => showAlert('Paspaudziau sesta kortele')}
                />
            </div>
        </div>
    );
};

export default Paskaita2;
