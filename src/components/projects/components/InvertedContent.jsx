import { Typography, Box, Button, Grid } from '@mui/material'
import { OpenInNewOutlined, GitHub } from '@mui/icons-material'

function InvertedContent({ project }) {
  return (
    <Grid container py={5}>
      <Grid
        item
        sm={12}
        md={5}
        sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
      >
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

      <Grid
        item
        sm={12}
        md={7}
        sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
      >
        <Box
          component="img"
          src={project.image}
          width="80%"
          sx={{
            float: 'right',
          }}
        />
      </Grid>
      <Grid
        item
        sm={12}
        md={7}
        sx={{
          display: { md: 'none' },
        }}
      >
        <Box
          component="img"
          src={project.image}
          width="80%"
          sx={{
            position: 'relative',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
      </Grid>
      <Grid
        item
        sm={12}
        md={5}
        sx={{ display: { md: 'none' } }}
        mt={5}
        textAlign="center"
      >
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
    </Grid>
  )
}

export default InvertedContent
