import './App.css';
import { AddEmployee } from './Pages/AddEmployee/AddEmployee';
import { Edit } from './Pages/Edit/Edit';
import { HomePage } from './Pages/HomePage/HomePage';
import { View } from './Pages/View/View';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<HomePage/> }/>
          <Route path='/add' element={<AddEmployee/>}/>
          <Route exact path='/employees/:id' element={<View/>}/>
          <Route exact path='/employee/:id' element={<Edit/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
