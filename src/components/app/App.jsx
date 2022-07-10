import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import Profile from '../profile/Profile';
import './App.css';


function App() {
  return ( 
    <div className = "app-wrapper" >
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;