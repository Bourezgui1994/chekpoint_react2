
import './App.css';
import { PhotoComponent } from "./component/profile/ProfilePhoto";
import { NameComponent } from "./component/profile/FullName";
import { AdressComponent } from "./component/profile/ Address";

function App() {
  return (
    <div className="App">
      <h1>Welcome to my profile </h1>
      < NameComponent/>
      < AdressComponent/>
      < PhotoComponent/>
     
    </div>
  );
}

export default App;
