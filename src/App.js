import { Route, Routes } from 'react-router-dom';
import './App.css';
import CartAdd from './Componet/CartAdd/CartAdd';
import Erro from './Componet/Erro/Erro';
import Header from './Componet/Header/Header';
import Home from './Componet/Home/Home';
import Footer from './Componet/Footer/Footer';
function App() {
  
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route index element={<Home/>} />
        <Route path='*' element={<Erro/>}/>
        <Route path='/food/:foodId' element={<CartAdd/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
