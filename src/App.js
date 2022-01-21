import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import VideoSection from './components/Video-Section/VideoSection';
import CommentsSection from './components/Comments-Section/CommentsSection';
import NextVideos from './components/Next-Videos/NextVideos';

function App() {
  return (
    <div className="App">
      <Header />
      <VideoSection />
      <CommentsSection />
      <NextVideos />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
