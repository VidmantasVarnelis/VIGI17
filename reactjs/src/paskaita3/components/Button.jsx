import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <button>
                {this.props.title ? this.props.title : 'Default text!'}
            </button>
        );
    }
}
export default Button;
// Funkcinis atrodytu taip:

// const Button =(props) => {
//     return <button>{props.title}</button>
// }
