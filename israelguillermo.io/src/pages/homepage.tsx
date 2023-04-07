import { Box, Typography, useMediaQuery, useTheme } from '@material-ui/core';

export function HomePage() {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const flexDirection = smallScreen ? 'column-reverse' : 'row';

  return (
    <Box
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        style={{
          width: '75%',
          flexDirection: flexDirection,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box style={{ marginRight: 24, marginTop: 50 }}>
          <img
            alt='Israel Guillermo'
            src='https://avatars.githubusercontent.com/u/65478257?s=400&u=4d838c4a721fa7ec7cc76322ded8222329ea6ace&v=4'
            width={smallScreen ? '300px' : '400px'}
            style={{ borderRadius: '50%' }}
          />
        </Box>
        <Box>
          <Box style={{ marginBottom: 16 }}>
            <Typography variant='h1'>Hello</Typography>
            <Typography variant='h3'>A bit about me </Typography>
            <Typography variant='body1'>
              I am a skilled front end developer with years of experience in
              Typescript, React and React Native.
            </Typography>
          </Box>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Box
              style={{
                height: smallScreen ? '100px' : '150px',
                width: smallScreen ? '100px' : '150px',
                backgroundColor: '#80D8DA',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: 'solid grey 1px'
              }}
            >
              <Typography variant='body1'>Resume</Typography>
            </Box>
            <Box
              style={{
                height: smallScreen ? '100px' : '150px',
                width: smallScreen ? '100px' : '150px',
                backgroundColor: '#EEA302',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: 'solid grey 1px'
              }}
            >
              <Typography variant='body1'>Projects</Typography>
            </Box>
            <Box
              style={{
                height: smallScreen ? '100px' : '150px',
                width: smallScreen ? '100px' : '150px',
                backgroundColor: '#ff3b25',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: 'solid grey 1px'
              }}
            >
              <Typography variant='body1'>Contact</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
