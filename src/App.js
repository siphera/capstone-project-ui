import NavBar from './components/NavBar'
import CustomerCheckout from './components/CustomerCheckout'
import PurchasePage from './components/PurchasePage'
import './App.css';

function App() {
  return (
    <div className="container">
      {/* <NavBar /> */}
      <PurchasePage />
      <CustomerCheckout />
      
    </div>
  );
}

export default App;
