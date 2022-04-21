import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';





function App() {


  return (
    <div className="App">
      <Navbar />
     <div className="content">
       <Hero />
     </div>
     <Footer />
    </div>
  );
}

export default App;
