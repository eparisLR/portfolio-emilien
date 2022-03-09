import collection from 'easter-egg-collection';
import AboutMe from './components/AboutMe';
import Layout from './components/Layout';

function App() {
  console.log(collection)
  return (
    <div className="App" data-testid="app">
      <Layout aboutMe={<AboutMe />}/>
    </div>
  );
}

export default App;
