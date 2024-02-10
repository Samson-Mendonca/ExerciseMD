
import { Route , Routes } from 'react-router-dom';

import { Box } from '@mui/material';
import ExercisePage from '../src/pages/ExercisePage';
import ExerciseDetail from '../src/pages/ExerciseDetail';
import About from '../src/pages/About';
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import './App.css'


function App() {
  return (
<Box width="400px" sx={{width:{xl:'1488px'}}} m={"auto"}>
  
  <Navbar/>
<Routes>
  <Route path='/'element={<Home />}/>
  <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
  <Route path="/ExercisePage/:item" element={<ExercisePage/>}/>
  <Route path="/About"element={<About/>}/>
  
  </Routes>
  <Footer/>
  </Box>


  )
}

export default App
