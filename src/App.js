import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
     <div className="content">
       <Hero />
     </div>
    </div>
  );
}

export default App;
