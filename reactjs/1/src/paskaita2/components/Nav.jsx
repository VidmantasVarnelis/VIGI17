import React from 'react';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <button>Home</button>
                </li>
                <li>
                    <button onClick={() => console.log('Vidmantas')}>
                        About
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
