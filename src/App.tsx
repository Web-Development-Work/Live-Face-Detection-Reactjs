import WebcamDemo from './components/WebcamDemo';
import ImageDemo from './components/ImageDemo';
import './App.css';

const App = (): JSX.Element => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <WebcamDemo />
    <ImageDemo />
  </div>
);
export default App;
