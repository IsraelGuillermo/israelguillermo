import { Box, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import classNames from 'classnames';
import styles from './home.module.css';
import { useRouter } from 'next/router';
import globalStyles from '../styles/globals.module.css';
export function HomePage() {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const flexDirection = smallScreen ? 'column-reverse' : 'row';

  const router = useRouter();
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
            src='/israel.JPEG'
            width={smallScreen ? '300px' : '400px'}
            style={{ borderRadius: '50%' }}
          />
        </Box>
        <Box>
          <Box style={{ marginBottom: 16 }}>
            <Typography style={{ fontFamily: styles.typography }} variant='h1'>
              Hello
            </Typography>
            <Typography style={{ fontFamily: styles.typography }} variant='h3'>
              A bit about me
            </Typography>
            <Typography style={{ fontFamily: styles.typography }} variant='h6'>
              I am a skilled front end developer with years of experience in
              Typescript, React and React Native.
            </Typography>
          </Box>

          <Box className={styles.containerCircles}>
            <Box
              className={classNames(styles.circleContainer, styles.bounce)}
              style={{
                height: smallScreen ? '100px' : '150px',
                width: smallScreen ? '100px' : '150px',
                backgroundColor: '#80D8DA'
              }}
              onClick={() => router.push('/resume')}
            >
              <Typography
                style={{ fontFamily: styles.typography }}
                variant='h5'
              >
                Resume
              </Typography>
            </Box>
            <Box
              className={styles.circleContainer}
              style={{
                height: smallScreen ? '100px' : '150px',
                width: smallScreen ? '100px' : '150px',
                backgroundColor: '#EEA302'
              }}
              onClick={() => router.push('/projects')}
            >
              <Typography
                style={{ fontFamily: styles.typography }}
                variant='h5'
              >
                Projects
              </Typography>
            </Box>
            <Box
              className={styles.circleContainer}
              style={{
                height: smallScreen ? '100px' : '150px',
                width: smallScreen ? '100px' : '150px',
                backgroundColor: '#ff3b25'
              }}
              onClick={() => router.push('/contact')}
            >
              <Typography
                style={{ fontFamily: styles.typography }}
                variant='h5'
              >
                Contact
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
