import { Box } from '@mui/material'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Projects from './components/projects/Projects'

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Box
        position="absolute"
        top="100vh"
        left={0}
        bgcolor="#0A192F"
        width="100%"
      >
        <Projects />
      </Box>
    </div>
  )
}

export default App
