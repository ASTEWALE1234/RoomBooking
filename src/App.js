import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { List } from './Pages/list/List';
import { Hotel } from './Pages/hotel/Hotel';
import { Home } from './Pages/Home/Home';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/hotels' element={<List/>}/>
    <Route path='/hotels/:id' element={<Hotel/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
