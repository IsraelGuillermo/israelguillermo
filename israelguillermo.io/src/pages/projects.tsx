import { Box, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import Head from 'next/head';
import styles from './home.module.css';
export default function ProjectsPage() {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
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
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box
          style={{
            width: '95%'
          }}
        >
          <Box
            style={{
              paddingTop: 24,
              paddingBottom: 24,
              marginLeft: 24,
              textAlign: smallScreen ? 'center' : undefined
            }}
          >
            <Typography style={{ fontFamily: styles.typography }} variant='h3'>
              Projects
            </Typography>
          </Box>
          <Box
            style={{
              display: 'flex',
              height: smallScreen ? '50%' : '25%',
              marginTop: 16,
              marginBottom: 24,
              padding: 16,
              flexDirection: smallScreen ? 'column' : 'row'
            }}
          >
            <Box style={{ width: smallScreen ? '100%' : '50%', padding: 16 }}>
              <Box style={{ paddingBottom: 16 }}>
                <Typography
                  style={{ fontFamily: styles.typography }}
                  variant='h4'
                >
                  Algorithm Visualizer
                </Typography>
              </Box>
              <Box>
                <Typography
                  style={{
                    fontWeight: 'lighter',
                    marginBottom: 8,
                    fontFamily: styles.typography
                  }}
                >
                  This project allows user to visually see how some algorithms
                  are sorted. It is built using Typescript, React and Vanilla
                  JS. The algorithms currently available are Merge sort, Bubble
                  sort and Selection Sort.
                </Typography>
                <Typography
                  style={{
                    fontWeight: 'lighter',
                    fontFamily: styles.typography
                  }}
                >
                  Technologies used: React, VanillaJS, TypeScript, HTML, CSS
                </Typography>
              </Box>
            </Box>

            <img
              style={{
                width: smallScreen ? '100%' : '50%',
                maxWidth: '550px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              src='/algoVisualizer.png'
              alt='Algorithm Visualizer'
            />
          </Box>
          <Box
            style={{
              display: 'flex',
              height: smallScreen ? '50%' : '25%',
              marginTop: 16,
              marginBottom: 16,
              padding: 16,
              flexDirection: smallScreen ? 'column' : 'row'
            }}
          >
            <Box style={{ width: smallScreen ? '100%' : '50%', padding: 16 }}>
              <Box style={{ paddingBottom: 16 }}>
                <Typography
                  style={{ fontFamily: styles.typography }}
                  variant='h4'
                >
                  CHEFocus
                </Typography>
              </Box>
              <Box>
                <Typography
                  style={{
                    fontWeight: 'lighter',
                    marginBottom: 8,
                    fontFamily: styles.typography
                  }}
                >
                  This application is perfect for all the chefs looking for a
                  good recipe! This application allows users to view and share
                  their favorite recipes. Users are also able to include a
                  picture of the prepared meal on the recipe.
                </Typography>
                <Typography
                  style={{
                    fontWeight: 'lighter',
                    fontFamily: styles.typography
                  }}
                >
                  Technologies used: React, Javascript, HTML, CSS, Node.JS,
                  MySQL
                </Typography>
              </Box>
            </Box>

            <img
              style={{
                width: smallScreen ? '100%' : '50%',
                maxWidth: '550px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              src='/chefocus.png'
              alt='CHEFocus'
            />
          </Box>
          <Box
            style={{
              display: 'flex',
              height: smallScreen ? '50%' : '25%',
              marginTop: 16,
              marginBottom: 16,
              padding: 16,
              flexDirection: smallScreen ? 'column' : 'row'
            }}
          >
            <Box style={{ width: smallScreen ? '100%' : '50%', padding: 16 }}>
              <Box style={{ paddingBottom: 16 }}>
                <Typography
                  style={{ fontFamily: styles.typography }}
                  variant='h4'
                >
                  Weather Dashboard
                </Typography>
              </Box>
              <Box>
                <Typography
                  style={{
                    fontWeight: 'lighter',
                    marginBottom: 8,
                    fontFamily: styles.typography
                  }}
                >
                  Weather Dashboard is an application which allows you to see
                  the weather anywhere in the world! This application gives you
                  the current weather, wind speed, humidity and UV index! This
                  application will also provide the user with a 5 day forecast
                  of the weather!
                </Typography>
                <Typography
                  style={{
                    fontWeight: 'lighter',
                    fontFamily: styles.typography
                  }}
                >
                  Technologies used: React, VanillaJS, TypeScript, HTML, CSS
                </Typography>
              </Box>
            </Box>

            <img
              style={{
                width: smallScreen ? '100%' : '50%',
                maxWidth: '550px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              src='/weatherDashboard.png'
              alt='Weather Dashboard'
            />
          </Box>
        </Box>
      </Box>
    </main>
  );
}
