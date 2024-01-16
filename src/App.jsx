import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './App.module.css'
import  Anasayfa  from './Anasayfa'
import Ss from "./page/Ss"

function App() {

  return (
    <div className={styles.App}>
    <Router hashType="noslash"> 
      <Routes> 
      <Route path="/" element= {<Anasayfa/>} /> 
      <Route path="/ss" element= {<Ss/>} /> 
      
      </Routes>
     </Router>
     </div>
  ) 
}

export default App