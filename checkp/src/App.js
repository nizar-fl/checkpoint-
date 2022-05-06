import logo from './logo.svg';
import './App.css';
import ProfileData from './Data'
import Profile from './profile/profile';

function App() {
  return (
    <div className="App">
      <Profile data ={ProfileData} imgsource ={'https://wallpapercave.com/wp/wp4772259.jpg'} />
     
    </div>
  );
}

export default App;
