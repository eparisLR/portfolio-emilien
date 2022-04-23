import collection from 'easter-egg-collection';
import Home from './pages/Home';
import Layout from './pages/Layout';
import AboutMe from "./pages/AboutMe";
import Creations from "./pages/Creations";
import ContactMe from "./pages/ContactMe";

function App() {
  console.log(collection)
  return (
    <div className="App" data-testid="app">
      <Layout home={<Home />} aboutMe={<AboutMe/>} creations={<Creations/>} contactMe={<ContactMe/>}/>
    </div>
  );
}

export default App;
