import { Box, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { Height } from '@material-ui/icons';
import Head from 'next/head';

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
          height: '100vh',
          width: '100%',
          padding: 24,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box
          style={{
            width: '95%',
            height: '100vh'
          }}
        >
          <Box
            style={{
              paddingTop: 24,
              paddingBottom: 24,
              textAlign: smallScreen ? 'center' : undefined
            }}
          >
            <Typography variant='h3'>Projects</Typography>
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
                <Typography variant='h4'>Algorithm Visualizer</Typography>
              </Box>
              <Box>
                <Typography style={{ fontWeight: 'lighter', marginBottom: 8 }}>
                  This project allows user to visually see how some algorithms
                  are sorted. It is built using Typescript, React and Vanilla
                  JS. The algorithms currently available are Merge sort, Bubble
                  sort and Selection Sort.
                </Typography>
                <Typography style={{ fontWeight: 'lighter' }}>
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
                <Typography variant='h4'>CHEFocus</Typography>
              </Box>
              <Box>
                <Typography style={{ fontWeight: 'lighter', marginBottom: 8 }}>
                  This application is perfect for all the chefs looking for a
                  good recipe! This application allows users to view and share
                  their favorite recipes. Users are also able to include a
                  picture of the prepared meal on the recipe.
                </Typography>
                <Typography style={{ fontWeight: 'lighter' }}>
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
                <Typography variant='h4'>Weather Dashboard</Typography>
              </Box>
              <Box>
                <Typography style={{ fontWeight: 'lighter', marginBottom: 8 }}>
                  Weather Dashboard is an application which allows you to see
                  the weather anywhere in the world! This application gives you
                  the current weather, wind speed, humidity and UV index! This
                  application will also provide the user with a 5 day forecast
                  of the weather!
                </Typography>
                <Typography style={{ fontWeight: 'lighter' }}>
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
            />
          </Box>
        </Box>
      </Box>
    </main>
  );
}
