import {
  Box,
  Typography,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

function About() {
  return (
    <Box>
      <Container
        id="about"
        maxWidth="md"
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
            <Typography variant="h3" mb={4}>
              <Box
                variant="span"
                sx={{ color: 'primary.main', display: 'inline-block' }}
              >
                02.
              </Box>{' '}
              About Me
            </Typography>
            <Typography variant="h6" mb={2}>
              I am Patrick, a software engineer from Northwestern, PA.
            </Typography>
            <Typography variant="h6" mb={2}>
              I enjoy technology from the inside-out, whether that be building
              web applications, customizing a PC, or anything in between. My
              goal is to provide great service, learn, and educate others.
            </Typography>
            <Typography variant="h6" mb={2}>
              Here are a few technologies I have been working with recently:
            </Typography>
            <Grid container>
              <Grid item xs={12} md={4}>
                <Typography
                  sx={{ mt: 4 }}
                  variant="h5"
                  component="div"
                  color="primary"
                >
                  Front-End
                </Typography>

                <List>
                  <ListItem sx={{ my: '0', py: '0' }}>
                    <ListItemIcon>
                      <ArrowRightIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="HTML & CSS" />
                  </ListItem>
                  <ListItem sx={{ my: '0', py: '0' }}>
                    <ListItemIcon>
                      <ArrowRightIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Javascript" />
                  </ListItem>
                  <ListItem sx={{ my: '0', py: '0' }}>
                    <ListItemIcon>
                      <ArrowRightIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="React & VueJS" />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography
                  sx={{ mt: 4 }}
                  variant="h5"
                  component="div"
                  color="primary"
                >
                  Back-End
                </Typography>

                <List>
                  <ListItem sx={{ my: '0', py: '0' }}>
                    <ListItemIcon>
                      <ArrowRightIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="PHP / Laravel" />
                  </ListItem>
                  <ListItem sx={{ my: '0', py: '0' }}>
                    <ListItemIcon>
                      <ArrowRightIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="NodeJS" />
                  </ListItem>
                  <ListItem sx={{ my: '0', py: '0' }}>
                    <ListItemIcon>
                      <ArrowRightIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="SQL" />
                  </ListItem>
                  <ListItem sx={{ my: '0', py: '0' }}>
                    <ListItemIcon>
                      <ArrowRightIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Redis" />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography
                  sx={{ mt: 4 }}
                  variant="h5"
                  component="div"
                  color="primary"
                >
                  DevOps
                </Typography>

                <List>
                  <ListItem sx={{ my: '0', py: '0' }}>
                    <ListItemIcon>
                      <ArrowRightIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="CircleCI" />
                  </ListItem>
                  <ListItem sx={{ my: '0', py: '0' }}>
                    <ListItemIcon>
                      <ArrowRightIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Git" />
                  </ListItem>
                  <ListItem sx={{ my: '0', py: '0' }}>
                    <ListItemIcon>
                      <ArrowRightIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Linux" />
                  </ListItem>
                  <ListItem sx={{ my: '0', py: '0' }}>
                    <ListItemIcon>
                      <ArrowRightIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Docker" />
                  </ListItem>
                  <ListItem sx={{ my: '0', py: '0' }}>
                    <ListItemIcon>
                      <ArrowRightIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="AWS" />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Box
              component="img"
              src="assets/patrick.png"
              position="relative"
              sx={{
                ' @media screen and (max-width: 899px)': {
                  left: '50%',
                  transform: 'translateX(-50%)',
                },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default About
