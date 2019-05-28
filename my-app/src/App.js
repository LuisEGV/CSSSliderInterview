import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button1 from './Button';

function App() {
  return (
    <div class="row">
      <div class="column">
      <div className="Section">
      <p> Styles</p>
          <Button1/>
          <Button1/>
      </div>
      <div className="Section">>
      <p> Direction</p>
          <Button1/>
          <Button1/>
          <Button1/>
          <Button1/>
          <Button1/>
          <Button1/>
      </div>
        <div className="Section">>
        <p> Colours</p>
        <div className="row">
        <div className="column1">
        <div className="Square1">
        </div>
            <Button1/>
        </div>
        <div className="column1">
        <div className="Square2">
            <Button1/>
        </div>
        </div>
        </div>
        </div>
        <div/>
        <div className="Section">>
        <p> Colour Format</p>
            <Button1/>
            <Button1/>
        </div>
      </div>
      <div class="column">

      <p>
      Display
      </p>
      <div className="ColourDisplay">
      </div>
      <div className="Info">
      <h3>
      Lol
      </h3>
      </div>

      </div>
    </div>

  );
}

export default App;
