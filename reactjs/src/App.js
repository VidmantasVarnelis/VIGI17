import React, { createContext, useReducer, useState } from 'react';
import { initialState, reducer } from './paskaita10/actions/main';
// import Paskaita2 from './paskaita2/Paskaita2';
// import Uzduotis2 from './paskaita2/Uzduotis2';
// import Paskaita4 from './paskaita4/Paskaita4';
// import Paskaita4Class from './paskaita4/Paskaita4Class';
// import Paskaita5 from './paskaita5/Paskaita5';
// import Paskaita6 from './paskaita6/Paskaita6';
// import Paskaita7 from './paskaita7/Paskaita7';
import Paskaita8 from './paskaita8/Paskaita8';
// import Paskaita10 from './paskaita10/Paskaita10';
// import Paskaita11 from './paskaita11/Paskaita11';
// import Paskaita12 from './paskaita12/Paskaita12';

export const MyContext = createContext();
export const SecondContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MyContext.Provider value={{ theme, setTheme, state, dispatch }}>
      <div>
        {/* <Paskaita2 /> */}
        {/* <Uzduotis2 /> */}
        {/* <Paskaita4 />
      <Paskaita4Class /> */}
        {/* <Paskaita5 /> */}
        {/* <Paskaita6 /> */}
        {/* <Paskaita7 /> */}
        <Paskaita8 />
        {/* <Paskaita10 /> */}
        {/* <Paskaita11 /> */}
        {/* <Paskaita12 /> */}
      </div>
    </MyContext.Provider>
  );
}

export default App;
