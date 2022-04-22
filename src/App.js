import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import GetImage from './utils/GetImages';
import GetData from './utils/GetData';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  const [catData, setCatData] = useState([]);

  useEffect(() => {
    (async () => {
      const imgs = await GetImage();
      let data = GetData();
      data = data.map((cat, i) => {
        cat.image = imgs[i].url;
        cat.id = i;
        return cat;
      });
      setCatData(data);
    })();
  }, []);

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
     <div className="content">
       <Routes>
       <Route path='/' element={<Home catData={catData}/>}/>
       </Routes>
     </div>
     <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
