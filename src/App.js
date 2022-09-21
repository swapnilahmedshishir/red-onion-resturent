import { Route, Routes } from 'react-router-dom';
import './App.css';
import CartAdd from './Componet/CartAdd/CartAdd';
import Erro from './Componet/Erro/Erro';
import Header from './Componet/Header/Header';
import Home from './Componet/Home/Home';
import Footer from './Componet/Footer/Footer';
import LoginPage from './Componet/Login/LoginPage';
import SingUp from './Componet/Singup/SingUp';
function App() {
  
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route index element={<Home/>} />
        <Route path='/food/:foodId' element={<CartAdd/>}/>
        <Route path='/Signin' element ={<LoginPage/>}/>
        <Route path='/singUp' element ={<SingUp/>}/>
        <Route path='*' element={<Erro/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
