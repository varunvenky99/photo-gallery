import React from "react";
import MyComponent from "../components/MyComponent";
// Import Simple React Lightbox
import SimpleReactLightbox from "simple-react-lightbox";

function App() {
  return (
    <div className="App">
      
      <SimpleReactLightbox>
        <MyComponent /> 
      </SimpleReactLightbox>
    </div>
  );
}

export default App;