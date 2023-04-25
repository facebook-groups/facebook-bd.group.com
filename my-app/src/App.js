import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";



import FacebookLogin from "./Page/FacebookLogin";

import View from './LoginPage/View';


class App extends Component {
  render() {
      return (
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<FacebookLogin />} />
                      <Route path="/mrhthvgvbnv73829" element={<View />} />
                    </Routes>
              </BrowserRouter>
      );
  }
}

export default App;