import { Typography, Box, Button, Grid } from '@mui/material'
import { OpenInNewOutlined, GitHub } from '@mui/icons-material'

function Content({ project }) {
  return (
    <Grid container py={5}>
      <Grid item xs={12} sm={7}>
        <Box component="img" src={project.image} width="80%" />
      </Grid>

      {/* <Grid item xs={12} sm={5}>
        <Typography variant="h4" mb={2}>
          {project.name}
        </Typography>
        <Typography mb={2}>{project.description}</Typography>
        <Typography mb={2}>{project.tech}</Typography>

        <Button variant="outlined" href={project.link} target="_blank">
          <OpenInNewOutlined color="primary" />
        </Button>
        <Button variant="outlined" href={project.github} target="_blank">
          <GitHub color="primary" />
        </Button>
      </Grid> */}

      <Grid item xs={12} sm={5} textAlign="right">
        <Typography variant="h4" mb={2}>
          {project.name}
        </Typography>
        <Typography mb={2}>{project.description}</Typography>
        <Typography mb={2}>{project.tech}</Typography>

        <Button variant="outlined" href={project.link} target="_blank">
          <OpenInNewOutlined color="primary" />
        </Button>
        <Button variant="outlined" href={project.github} target="_blank">
          <GitHub color="primary" />
        </Button>
      </Grid>

      {/* <Grid item xs={12} sm={7}>
        <Box
          component="img"
          src={project.image}
          width="80%"
          sx={{ float: 'right' }}
        />
      </Grid> */}
    </Grid>
  )
}

export default Content
