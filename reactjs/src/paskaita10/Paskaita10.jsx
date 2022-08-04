import React, { useContext } from 'react';
import { MyContext } from '../App';
import styles from './paskaita10.module.scss';

const Paskaita10 = () => {
  const { theme, state, dispatch } = useContext(MyContext);

  return (
    <div className={theme === 'light' ? styles.light : styles.dark}>
      <Component />
      {/* <ClassComponent /> */}
      <div>
        <h1>Reducer state values</h1>
        <h1>
          {state.name} - {state.year}
        </h1>
        <button
          onClick={() =>
            dispatch({ type: 'change-name', payload: 'Javascript' })
          }
        >
          Change Name reducer value
        </button>
        <button
          onClick={() => dispatch({ type: 'change-year', payload: 2015 })}
        >
          Change Year reducer value
        </button>
        <div>
          <h1>Count - {state.count}</h1>
          <button onClick={() => dispatch({ type: 'increment' })}>
            Increment
          </button>
          <button onClick={() => dispatch({ type: 'decrement' })}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Paskaita10;

const Component = () => {
  return (
    <div>
      First Component
      <Component2 />
      <SecondComponent />
    </div>
  );
};

const Component2 = () => {
  return (
    <div>
      Second Component
      <Component3 />
    </div>
  );
};

const Component3 = () => {
  const { theme, setTheme, state } = useContext(MyContext);
  return (
    <div>
      Third Component - state {theme}
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Change theme
      </button>
      <h1>
        State from child - name {state.name} - count {state.count}
      </h1>
    </div>
  );
};

const SecondComponent = () => {
  const { theme } = useContext(MyContext);
  return <div>Second Child Component - state - name {theme}</div>;
};

class ClassComponent extends React.Component {
  render() {
    return (
      <div>
        Class component -
        <MyContext.Consumer>{(value) => <div>{value}</div>}</MyContext.Consumer>
      </div>
    );
  }
}
