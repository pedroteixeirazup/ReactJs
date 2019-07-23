import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CourserList from './components/CourseList';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <CourserList/>
      </div>
    </Provider>
  );
}

export default App;
