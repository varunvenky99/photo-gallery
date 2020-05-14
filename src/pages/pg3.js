import React from "react";
import Compoturk from "../components/Compoturk";
// Import Simple React Lightbox
import SimpleReactLightbox from "simple-react-lightbox";

function App() {
  return (
    <div className="App">
      
      <SimpleReactLightbox>
        <Compoturk /> 
      </SimpleReactLightbox>
    </div>
  );
}

export default App;