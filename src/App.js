import './App.css';
import Profile from './Components/Profile/Profile';
import imgProfile from './Img/DSC_0394.JPG'
function App() {
  const Data = {
    fullName : 'Bacem',
    bio : '..........',
    profession : 'Ingénieur manager'
  }
  const handelName = (name) => {alert(`Profile's username is ${name}`)}
  return (
    <div className="App">
     <Profile data={Data} handelName={handelName}/>
     {imgProfile} 
<Profile/>
    </div>
  );
}

export default App;
