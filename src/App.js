import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './componets/pages/Home'
import Company from './componets/pages/Company'
import Contact from './componets/pages/Contact'
import NewProject from './componets/pages/NewProject'
import Projects from './componets/pages/Projects'
import Project from './componets/pages/Project'

// CSS
import Container from './componets/layout/Container'
import Navbar from './componets/layout/Navbar'
import Footer from './componets/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/company' element={<Company />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/newProject' element={<NewProject />} />
        <Route path='/project/:id' element={<Project />} />

      </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App;
