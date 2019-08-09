import React from 'react';
import NavBar from './components/NavBar'
import Founders from './components/Founders';



function App() {
  var image_path = "<%= asset_path('./images/joao.jpg') %>" 
  return (
    <div className="App">
        <NavBar/>
        <Founders/>
      
    </div>
  );
}

export default App;