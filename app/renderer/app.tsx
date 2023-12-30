import React from "react";
import ReactDOM from "react-dom";
import Router from './router';
import { createRoot } from 'react-dom/client';

// 👇 引入 store
import {store} from './store';

// 引入 Provider
import { Provider } from 'react-redux';



function App(){
    return (
        <Provider store={store}>
          <Router />
        </Provider>
      );
}

//ReactDOM.render(<App/>,document.getElementById('root'));

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App/>);
