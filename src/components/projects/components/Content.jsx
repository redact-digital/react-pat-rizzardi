import { Typography, Box, Button, Grid } from '@mui/material'
import { OpenInNewOutlined, GitHub } from '@mui/icons-material'

function Content({ project }) {
  return (
    <Grid
      container
      py={5}
      sx={{
        '@media screen and (max-width: 899px)': {
          textAlign: 'center',
        },
      }}
    >
      <Grid item sm={12} md={7}>
        <Box component="img" src={project.image} width="80%" />
      </Grid>
      <Grid
        item
        sm={12}
        md={5}
        sx={{
          '@media screen and (min-width: 899px)': {
            textAlign: 'right',
          },

          '@media screen and (max-width: 899px)': {
            textAlign: 'center',
            marginTop: '2rem',
          },
        }}
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

export default Content
