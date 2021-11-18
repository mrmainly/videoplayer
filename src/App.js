import logo from './logo.svg';
import ReactPlayer from 'react-player'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{ color: 'white' }}>Video player for you</h1>
      <div className="videoPlayer" >
        <ReactPlayer url='http://80.73.69.18:6023/play/demo/?lang=ru' width="100%" height="800px" />
      </div>
    </div>
  );
}

export default App;
