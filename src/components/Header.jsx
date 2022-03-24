import { Grid, Container, Typography, Button } from '@mui/material'
import { Send } from '@mui/icons-material'

function Header() {
  const wave = {
    fill: '#000',
    opacity: '0.8',
    width: '100%',
    height: '45vh',
    position: 'absolute',
    bottom: '0',
    left: '0',
  }

  const header = {
    background:
      'linear-gradient(black 5%, transparent 95%), url("assets/header.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: ' no-repeat',
    color: '#fff',
    paddingTop: '260px',
    paddingBottom: '300px',
    height: '100vh',
  }

  return (
    <header style={header}>
      <svg version="1.1" style={wave}>
        <path
          d="
                   M0 67
                   C 273,183
                     822, -40
                     1920,106
                   V 600
                   H 0
                   V 67
                   Z
                   "
        >
          <animate
            repeatCount="indefinite"
            attributeName="d"
            dur="25s"
            attributeType="XML"
            values="
                           M0 77
                           C 473, 283
                             822, -40
                             1920, 116
                             V 600
                             H 0
                             V 300
                             Z;
                             M0 77
                             C 473, -40
                             1222, 283
                             1920, 136
                             V 600
                             H 0
                             V 300
                             Z;
                             M0 77
                             C 973, 260
                             1722, -53
                             1920, 120
                             V 600
                             H 0
                             V 300
                             Z;
                             M0 77
                             C 473, 283
                             822, -40
                             1920, 116
                             V 600
                             H 0
                             V 300
                             Z"
          ></animate>
        </path>
      </svg>
      <Container maxWidth="lg">
        <Grid>
          <Typography variant="h1" fontWeight={600}>
            Patrick Rizzardi
          </Typography>
          <Typography variant="h2" fontWeight={500} fontSize="3.2rem">
            I create and develop web applications
          </Typography>
        </Grid>
        <Grid marginTop={4}>
          <Typography variant="h6">
            I am a software developer in Northwestern, PA
          </Typography>
          <Typography variant="h6">
            specializing in building remarkable websites, and applications.
          </Typography>
        </Grid>
        <Grid marginTop={4}>
          <Button
            startIcon={<Send />}
            variant="outlined"
            href="mailto:patrick.d.rizzardi@gmail.com"
          >
            Get In Touch
          </Button>
        </Grid>
      </Container>
    </header>
  )
}

export default Header
