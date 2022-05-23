import Home from './pages/Home';
import AboutCats from './pages/AboutCats'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import GetImage from './utils/GetImages';
import GetData from './utils/GetData';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  const [list,setlist]= useState([])
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

  const addToList =(item)=>setlist([...list, item]);
  
  const removeFromList = (i) => {
    let storedList = [...list];
    storedList.splice(i, 1);
    setlist(storedList);
  };

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar list={list} removeFromList={removeFromList}/>
     <div className="content">
       <Routes>
       <Route path='/' element={<Home catData={catData} addToList={addToList}/>}/>
        <Route path="/AboutCat" element={<AboutCats catData={catData} addToList={addToList}/>}>
          <Route path=":name"/>
          </Route>
       </Routes>
     </div>
     <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
