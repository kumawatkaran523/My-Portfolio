import './App.css';
import Header from './components/Header';
import Showcase from './components/Showcase';
// import {createBrowserRouter,RouterProvider} from 'react-router-dom';

function App() {
  return (
    <>
      <div className="md:mx-auto md:px-40">
        <Header />
        <Showcase />
        
      </div>
    </>
  );
}

export default App;
