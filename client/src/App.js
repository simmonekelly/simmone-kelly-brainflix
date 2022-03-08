import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.scss';
import Header from './components/1-Header/Header';
import HomePage from './components/Home-Page/HomePage';
import VideoUploadPage from './components/Video-Upload-Page/VideoUploadPage';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/upload" component={VideoUploadPage} />
          <Route path="/:id" component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App

//Clicking on the “Upload” button must link to the Video Upload Page.
