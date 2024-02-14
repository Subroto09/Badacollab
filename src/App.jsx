import './App.css';
import {Route, Routes} from 'react-router-dom'
import Root from './components/Root'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import VisionPage from './components/VisionPage'
import CollabsPage from './components/CollabsPage'
import DreamsPage from './components/DreamsPage'
import InternshipPage from './components/InternshipPage'

function App() {
  return (
<>
<Routes>
  <Route path='/' element={<Root />}>
    <Route path='' element={<HomePage />} />
    <Route path='about' element={<AboutPage />}/>
    <Route path='vision' element={<VisionPage />}/>
    <Route path='collabs' element={<CollabsPage />}/>
    <Route path='dreams' element={<DreamsPage />}/>
    <Route path='internship' element={<InternshipPage />}/>
  </Route>

</Routes>
</>
  );
}

export default App;
