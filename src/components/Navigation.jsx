import { Typography, Box, Button } from '@mui/material'

function Navigation() {
  const links = [
    {
      id: '01.',
      href: '/#projects',
      name: 'Projects',
    },
    {
      id: '02.',
      href: '/#about',
      name: 'About',
    },
    // {
    //   id: '03.',
    //   href: '/#blog',
    //   name: 'Recent Posts',
    // },
    {
      id: '03.',
      href: '/#contact',
      name: 'Contact',
    },
    {
      id: null,
      href: 'https://blog.patrizzardi.com/ghost',
      name: 'Login',
    },
  ]
  return (
    <Box
      component="nav"
      width="100%"
      pt={1.2}
      position="absolute"
      sx={{ boxShadow: 3 }}
    >
      <Button
        href="/"
        sx={{
          display: { xs: 'none', sm: 'none', md: 'inline-block' },
        }}
      >
        <Box component="img" src="assets/logo.png" sx={{ width: '45px' }} />
      </Button>
      <Button
        href="/"
        sx={{
          display: { md: 'none', left: '50%', transform: 'translateX(-50%)' },
        }}
      >
        <Box component="img" src="assets/logo.png" sx={{ width: '100px' }} />
      </Button>
      <Box
        sx={{
          float: 'right',
          display: { xs: 'none', sm: 'none', md: 'inherit' },
        }}
        py={2.2}
        mr={3}
      >
        {links.map((link) => (
          <Button
            key={link.name}
            href={link.href}
            sx={{ p: '.3rem 1.2rem !important' }}
          >
            {link.id && (
              <Typography variant="button" color="primary">
                {link.id}{' '}
              </Typography>
            )}

            {link.name}
          </Button>
        ))}
        <Button
          variant="outlined"
          sx={{ padding: '.3rem 1.2rem !important' }}
          href="assets/resume.pdf"
          target="_blank"
        >
          Resume
        </Button>
      </Box>
    </Box>
  )
}

export default Navigation
