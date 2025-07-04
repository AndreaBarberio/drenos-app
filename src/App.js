import './index.css';
import DesktopNav from './components/DesktopNav';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="App ">
      <DesktopNav logo={{ src: logo, alt: "drenos-logo" }} />
    </div>
  );
}

export default App;
