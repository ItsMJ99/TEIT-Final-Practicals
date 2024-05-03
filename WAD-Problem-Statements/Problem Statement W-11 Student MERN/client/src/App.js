import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes ,Route} from 'react-router-dom';
import ReadStudent from './components/ReadStudent';
import UpdateStudent from './components/UpdateStudent';
import AddStudent from './components/AddStudent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReadStudent/>}/>
          <Route path="/update/:id" element={<UpdateStudent/>}/>
          <Route path="/add" element={<AddStudent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
