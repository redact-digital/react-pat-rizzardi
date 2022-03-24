import { Box } from '@mui/material'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Projects from './components/projects/Projects'

function App() {
  const email = 'patrick@redact.digital'
  return (
    <div>
      <Navigation />
      <Header email={email} />
      <Box
        position="absolute"
        top="100vh"
        left={0}
        bgcolor="#0A192F"
        width="100%"
      >
        <Projects />
        <About />
        <Contact email={email} />
      </Box>
    </div>
  )
}

export default App
