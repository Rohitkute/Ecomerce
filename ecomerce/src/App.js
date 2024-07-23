import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
// import Navbar from './Components/Navbar/Navbar';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/Home/HomePage';
// import ProductPage from './ProductPage';
// import ContactPage from './ContactPage';
import Footer from './Components/Footer/Footer'; // Import the Footer component
import ProductsPage from './Components/Product/ProductPage';
import ContactUs from './Components/Contact/ContactUs';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} /> */}
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactUs />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
