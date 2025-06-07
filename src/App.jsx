import { useState } from "react";
import NavBar from './components/NavBar'
import News from "./components/News"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App() {
    const [progress, setProgress] = useState(0)
    const pageSize = '7'
    const apiKey = import.meta.env.VITE_NEWS_API

  return (
    <>
      <Router>    
      <NavBar/>
      <LoadingBar
        height={3}
        color="#f11946"
        progress={progress}
      />
      <Routes>
      <Route exact path="/" element={<News setProgress={setProgress} key='general' pageSize={pageSize} category='general' apiKey={apiKey} country='us'/>}></Route>
      <Route exact path="/business" element={<News setProgress={setProgress} key='business' pageSize={pageSize} category='business' apiKey={apiKey} country='us'/>}></Route>
      <Route exact path="/entertainment" element={<News setProgress={setProgress} key='entertainment' pageSize={pageSize} category='entertainment' apiKey={apiKey} country='us'/>}></Route>
      <Route exact path="/health" element={<News setProgress={setProgress} key='health' pageSize={pageSize} category='health' apiKey={apiKey} country='us'/>}></Route>
      <Route exact path="/science" element={<News setProgress={setProgress} key='science' pageSize={pageSize} category='science' apiKey={apiKey} country='us'/>}></Route>
      <Route exact path="/sports" element={<News setProgress={setProgress} key='sports' pageSize={pageSize} category='sports' apiKey={apiKey} country='us'/>}></Route>
      <Route exact path="/technology" element={<News setProgress={setProgress} key='technology' pageSize={pageSize} category='technology' apiKey={apiKey} country='us'/>}></Route>
      </Routes>
      </Router>
    </>
  )
}

export default App
