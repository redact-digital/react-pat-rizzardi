import { Send } from '@mui/icons-material'
import { Box, Typography, Container, Grid, Button } from '@mui/material'

function Contact({ email }) {
  return (
    <Box>
      <Container
        id="contact"
        maxWidth="lg"
        sx={{
          color: 'secondary.main',
          my: '10rem',
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={9}
            sx={{
              ' @media screen and (max-width: 899px)': {
                textAlign: 'center',
                marginBottom: '2rem',
              },
            }}
          >
            <Typography variant="h6" color="primary" mb={4}>
              <Box
                variant="span"
                sx={{ color: 'primary.main', display: 'inline-block' }}
              >
                03.
              </Box>{' '}
              Whats Next?
            </Typography>
            <Typography variant="h3" mb={2}>
              Get in Touch
            </Typography>
            <Typography variant="h6" mb={2}>
              I am always looking for new opportunities to learn, educate, and
              get involved. My inbox is always open for questions or if you just
              want to say hi, I will try my best to get back to you!
            </Typography>

            <Button
              startIcon={<Send />}
              variant="outlined"
              href={`mailto:${email}`}
              sx={{ mt: '2rem' }}
            >
              Say Hi
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Typography variant="h6" mb={4} textAlign="center" color="secondary">
        Designed and built by{' '}
        <Box
          variant="span"
          sx={{ color: 'primary.main', display: 'inline-block' }}
        >
          Patrick Rizzardi
        </Box>
      </Typography>
    </Box>
  )
}

export default Contact
