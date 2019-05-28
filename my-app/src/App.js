import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button1 from './Button';
import InputExampleInput from './Input.js'

function App() {
  let name = "Click"
  return (
    <div class="row">
      <div class="column">
      <div className="Section">
      <p> Styles</p>
          <Button1 name="Linear"/>
          <Button1 name="Radial"/>
      </div>
      <div className="Section">>
      <p> Direction</p>
          <Button1 name="Top"/>
          <Button1 name="Top Right"/>
          <Button1 name="Right"/>
          <Button1 name="Bottom Right"/>
          <Button1 name="Bottom"/>
          <Button1 name="Bottom Left"/>
          <Button1 name="Left"/>
          <Button1 name="Top left"/>
      </div>
        <div className="Section">
        <p> Colours</p>
        </div>
        <div className="row">
          <div className="column1">
            <div className="Square1">
            </div>
              <div className="Textlater">
              <Button1 name="e66465"/>
              </div>
          </div>
          <div className="column1">
            <div className="Square2">
            </div>
            <div className="Textlater">
            <Button1 name="9198e5"/>
            </div>
          </div>
          </div>

        <div/>
        <div/>
        <div className="Section">>
        <p> Colour Format</p>
            <Button1 name="Hex"/>
            <Button1 name="RGB"/>
        </div>
      </div>

      <div class="column">

      <p>
      Display
      </p>
      <div className="ColourDisplay">
      </div>
      <div className="Info">
      <p className="Infotext">
      background: linear-gradient(#e66465, #9198e5)
      background: linear-gradient(#e66465, #9198e5)
      background: linear-gradient(#e66465, #9198e5)
      background: linear-gradient(#e66465, #9198e5)
      </p>
      </div>

      </div>
    </div>

  );
}

export default App;
