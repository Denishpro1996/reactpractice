import './App.css';
import Header from './Header';
  import ContactUs from './ContactUs';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import Home from './Home';
import Register from './Register';
import Signin from './Signin';
import Footer from './Footer';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Signin' element={<Signin />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
