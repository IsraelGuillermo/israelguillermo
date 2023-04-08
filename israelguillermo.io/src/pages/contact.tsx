import { Box, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import classNames from 'classnames';
import styles from './home.module.css';
import Head from 'next/head';

export default function Contact() {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const flexDirection = smallScreen ? 'column-reverse' : 'row';

  return (
    <main>
      <Head>
        <title>Israel Guillermo</title>
        <meta name='description' content='Personal Website' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box
        style={{
          height: '100vh',
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
          <Box style={{ marginRight: 24 }}>
            <img
              alt='Israel Guillermo'
              src='/israel.JPEG'
              width={smallScreen ? '300px' : '400px'}
              style={{ borderRadius: '50%' }}
            />
          </Box>
          <Box>
            <Box style={{ marginBottom: 16 }}>
              <Typography
                style={{ fontFamily: styles.typography }}
                variant='h1'
              >
                Ways to contact me
              </Typography>
            </Box>

            <Box className={styles.containerCircles}>
              <a
                className={classNames(styles.circleContainer, styles.bounce)}
                style={{
                  height: smallScreen ? '100px' : '150px',
                  width: smallScreen ? '100px' : '150px',
                  backgroundColor: '#80D8DA'
                }}
                href='https://github.com/IsraelGuillermo'
                target='blank'
              >
                <Typography
                  style={{ fontFamily: styles.typography }}
                  variant='h5'
                >
                  Github
                </Typography>
              </a>
              <a
                className={styles.circleContainer}
                style={{
                  height: smallScreen ? '100px' : '150px',
                  width: smallScreen ? '100px' : '150px',
                  backgroundColor: '#EEA302'
                }}
                href='https://www.linkedin.com/in/israel-guillermo/'
                target='blank'
              >
                <Typography
                  style={{ fontFamily: styles.typography }}
                  variant='h5'
                >
                  LinkedIn
                </Typography>
              </a>
              <a
                className={styles.circleContainer}
                style={{
                  height: smallScreen ? '100px' : '150px',
                  width: smallScreen ? '100px' : '150px',
                  backgroundColor: '#ff3b25'
                }}
                href='mailto:israelguillermo22@gmail.com'
              >
                <Typography
                  style={{ fontFamily: styles.typography }}
                  variant='h5'
                >
                  Email
                </Typography>
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </main>
  );
}
