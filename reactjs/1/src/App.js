import React from 'react';
import './App.css';

function App() {
    const myFunction = () => {
        console.log('CodeAcademy');
    };

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <button onClick={myFunction}>Home</button>
                    </li>
                    <li>
                        <button onClick={() => console.log('Vidmantas')}>
                            About
                        </button>
                    </li>
                </ul>
            </nav>
            <div className='card'>
                <div>
                    <h1>Testuoju</h1>
                </div>
                <div>
                    <h1>test</h1>
                </div>
                <div>
                    <h1>test12</h1>
                    <p>Result: </p>
                </div>
            </div>
            <img src='https://picsum.photos/600' alt='' />
        </div>
    );
}

export default App;
