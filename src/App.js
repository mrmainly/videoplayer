import logo from './logo.svg';
import ReactPlayer from 'react-player'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{ color: 'white' }}>Video player for you</h1>
      <div className="videoPlayer" >
        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width="100%" height="800px" />
      </div>
    </div>
  );
}

export default App;
