import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CourserList from './components/CourseList';
import EffectExample from './EffectExample';


function App() {
  const [visible, setVisible] = useState(true);

  return (
    <>
    <Provider store={store}>
      <div className="App">
          <CourserList/>
      </div>
    </Provider>

    <EffectExample/>
    </>
  );
  // setTimeout(() => {
  //   setVisible(false);
  // }, 5000);
  
  //   return visible && <EffectExample/>;
}

export default App;
