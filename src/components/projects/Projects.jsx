import { Typography, Box, Container, Grid } from '@mui/material'
import Content from './components/Content'
import InvertedContent from './components/InvertedContent'

function Projects() {
  const projects = [
    {
      id: 1,
      name: 'West County Fitness',
      background: '',
      solution: '',
      description:
        "A simple look that kick started West County Fitness' online prescence. This website is hosted using the LAMP stack and leverages using the Laravel framework. The client now has a personal CMS and blog to update customers at all times.",
      github: 'https://github.com/patrickrizz/wcffit',
      link: 'https://wcffit.com',
      image: 'assets/wcffit.png',
      slug: 'west-county-fitness',
      tech: ['Laravel'],
    },
    {
      id: 2,
      name: 'Expense Tracker',
      background: '',
      solution: '',
      description:
        'A web app for tracking expenses that can filter by amount and date. This is a simple online checkbook with no confusing quirks that would make the user confused.',
      github: 'https://github.com/patrickrizz/expense-tracker',
      link: 'https://budget-4c0dd.web.app/',
      image: 'assets/expensify.png',
      slug: 'some-cool-project',
      tech: ['React'],
    },
  ]
  return (
    <Container
      id="projects"
      maxWidth="lg"
      sx={{
        color: 'secondary.main',
        my: '10rem',
      }}
    >
      <Typography variant="h3" mb={16}>
        <Box
          variant="span"
          sx={{ color: 'primary.main', display: 'inline-block' }}
        >
          01.
        </Box>{' '}
        Featured Projects
      </Typography>

      {projects.map((project) => (
        <Grid container py={5}>
          {project.id % 2 !== 0 ? (
            <Content project={project} />
          ) : (
            <InvertedContent project={project} />
          )}
        </Grid>
      ))}
    </Container>
  )
}

export default Projects
