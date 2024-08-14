import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Nav from './components/Nav'

function App() {

  return (
    <div className="App container">
      <BrowserRouter>
        <Nav />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            {/* <Route path='/workout' element={<Nav></Nav>}/> so if you go to this link it will render Nav component */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;