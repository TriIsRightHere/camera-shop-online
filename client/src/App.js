// import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import LoginPage from './components/LoginPage/LoginPage';
import MainPage from './components/MainPage/MainPage';
import ProductPage from './components/ProductPage/ProductPage';


function App() {
  return (
    <div className="App">
      <Hello></Hello>
      <LoginPage></LoginPage>
      <MainPage></MainPage>
      <ProductPage></ProductPage>
    </div>
  );
}

export default App;
