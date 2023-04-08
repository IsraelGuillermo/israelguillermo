import { Box, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import Head from 'next/head';
import styles from './home.module.css';
export default function ResumePage() {
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
      <Box className={styles.resumeMainContainer}>
        <Box
          style={{
            width: '95%'
          }}
        >
          <Box className={styles.resumeContainer}>
            <Typography style={{ fontFamily: styles.typography }} variant='h3'>
              Resume
            </Typography>
          </Box>
          <Box
            className={styles.sectionContainer}
            style={{
              height: smallScreen ? '50%' : '25%',
              flexDirection: smallScreen ? 'column' : 'row'
            }}
          >
            <Box
              style={{
                width: smallScreen ? '100%' : '50%',
                height: '25%'
              }}
            >
              <Box
                style={{
                  marginBottom: smallScreen ? 16 : 0,
                  marginLeft: smallScreen ? 0 : 24
                }}
              >
                <Typography
                  style={{
                    fontFamily: styles.typography
                  }}
                  variant='h4'
                >
                  Work Experience
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box className={styles.infoBox}>
                <Typography
                  variant='h6'
                  style={{
                    fontFamily: styles.typography,
                    width: '30%'
                  }}
                >
                  Nov. 2021 - April 2023
                </Typography>
                <Box
                  style={{
                    width: smallScreen ? '100%' : '50%'
                  }}
                  className={styles.innerInfoBox}
                >
                  <Typography
                    variant='h6'
                    style={{
                      marginBottom: 4,
                      fontFamily: styles.typography
                    }}
                  >
                    Application Developer I
                  </Typography>
                  <Typography
                    variant='body2'
                    style={{
                      fontWeight: 'lighter',
                      marginBottom: 4,
                      fontFamily: styles.typography
                    }}
                  >
                    - Developed organizational design software utilizing D3,
                    React and Typescript for a Big Three Consulting Company
                  </Typography>

                  <Typography
                    variant='body2'
                    style={{
                      fontWeight: 'lighter',
                      marginBottom: 4,
                      fontFamily: styles.typography
                    }}
                  >
                    - Contributed to internal and client projects by delivering
                    features and bug fixes which provided results for client’s
                    needs
                  </Typography>
                  <Typography
                    variant='body2'
                    style={{
                      fontWeight: 'lighter',
                      marginBottom: 4,
                      fontFamily: styles.typography
                    }}
                  >
                    - Collaborated with Test Engineers and Designers to provide
                    Software Development insight on upcoming features and
                    enhancements to address tech limitations
                  </Typography>
                  <Typography
                    variant='body2'
                    style={{
                      fontWeight: 'lighter',
                      marginBottom: 8,
                      fontFamily: styles.typography
                    }}
                  >
                    - Collaborated with developers and provided feedback through
                    code reviews to ensure best practices were upheld
                  </Typography>
                </Box>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'flex-end'
                }}
              >
                <Typography
                  variant='h6'
                  style={{
                    fontFamily: styles.typography,

                    width: '30%'
                  }}
                >
                  April 2021 - Nov. 2021
                </Typography>
                <Box
                  style={{
                    width: smallScreen ? '100%' : '50%'
                  }}
                  className={styles.innerInfoBox}
                >
                  <Typography
                    variant='h6'
                    style={{
                      marginBottom: 4,
                      fontFamily: styles.typography
                    }}
                  >
                    Application Developer Apprentice
                  </Typography>
                  <Typography
                    variant='body2'
                    style={{
                      fontWeight: 'lighter',
                      marginBottom: 4,
                      fontFamily: styles.typography
                    }}
                  >
                    - Collaborated with senior developers and mentors to
                    increase knowledge of foundational skills and technologies
                  </Typography>

                  <Typography
                    variant='body2'
                    style={{
                      fontWeight: 'lighter',
                      marginBottom: 4,
                      fontFamily: styles.typography
                    }}
                  >
                    - Honed skills such as Javascript, Typescript, React, React
                    Native, Jira and Agile methodologies through building mobile
                    and web applications
                  </Typography>
                  <Typography
                    variant='body2'
                    style={{
                      fontWeight: 'lighter',
                      marginBottom: 4,
                      fontFamily: styles.typography
                    }}
                  >
                    - Participated in client meetings to understand client’s
                    needs and learn best practices for client engagement
                  </Typography>
                </Box>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'flex-end'
                }}
              >
                <Typography
                  variant='h6'
                  style={{
                    fontFamily: styles.typography,

                    width: '30%'
                  }}
                >
                  April 2021 - Nov. 2021
                </Typography>
                <Box
                  style={{
                    width: smallScreen ? '100%' : '50%'
                  }}
                  className={styles.innerInfoBox}
                >
                  <Typography
                    variant='h6'
                    style={{
                      marginBottom: 4,
                      fontFamily: styles.typography
                    }}
                  >
                    Executive Service Consultant
                  </Typography>
                  <Typography
                    variant='body2'
                    style={{
                      fontWeight: 'lighter',
                      marginBottom: 4,
                      fontFamily: styles.typography
                    }}
                  >
                    - Analyzed and investigated insurance data resulting in
                    increased efficiency through development of centralized
                    resources
                  </Typography>

                  <Typography
                    variant='body2'
                    style={{
                      fontWeight: 'lighter',
                      marginBottom: 4,
                      fontFamily: styles.typography
                    }}
                  >
                    - Reduced escalations and call volume by examining potential
                    bugs, collaborating with information technology to identify,
                    monitor and resolve any system bugs
                  </Typography>
                  <Typography
                    variant='body2'
                    style={{
                      fontWeight: 'lighter',
                      marginBottom: 4,
                      fontFamily: styles.typography
                    }}
                  >
                    - Devised a routing project for bugs which reduced
                    processing times by 10% and saved the company $8000 annually
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            className={styles.sectionContainer}
            style={{
              height: smallScreen ? '50%' : '25%',
              flexDirection: smallScreen ? 'column' : 'row'
            }}
          >
            <Box
              style={{
                width: smallScreen ? '100%' : '50%',
                height: '25%'
              }}
            >
              <Box
                style={{
                  marginBottom: smallScreen ? 16 : 0,
                  marginLeft: smallScreen ? 0 : 24
                }}
              >
                <Typography
                  style={{
                    fontFamily: styles.typography
                  }}
                  variant='h4'
                >
                  Education
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'flex-end'
                }}
              >
                <Typography
                  variant='h6'
                  style={{
                    fontFamily: styles.typography,
                    marginRight: 8,
                    width: '30%'
                  }}
                >
                  Sept. 2020 - March 2021
                </Typography>
                <Box
                  className={styles.innerInfoBox}
                  style={{
                    width: smallScreen ? '100%' : '50%'
                  }}
                >
                  <Typography
                    variant='h6'
                    style={{
                      marginBottom: 4,
                      fontFamily: styles.typography
                    }}
                  >
                    The University of Kansas
                  </Typography>
                  <Typography
                    variant='body2'
                    style={{
                      fontWeight: 'lighter',
                      marginBottom: 4,
                      fontFamily: styles.typography
                    }}
                  >
                    - Web Development Certificate
                  </Typography>

                  <Typography
                    variant='body2'
                    style={{
                      fontWeight: 'lighter',
                      marginBottom: 8,
                      fontFamily: styles.typography
                    }}
                  >
                    - A 24-week intensive program focused on gaining technical
                    programming skills in HTML5, CSS3, JavaScript, JQuery,
                    Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express,
                    Handelbars.js & ReactJS.
                  </Typography>
                </Box>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'flex-end'
                }}
              >
                <Typography
                  variant='h6'
                  style={{
                    fontFamily: styles.typography,
                    marginRight: 8,
                    width: '30%'
                  }}
                >
                  August 2019 -
                </Typography>
                <Box
                  className={styles.innerInfoBox}
                  style={{
                    width: smallScreen ? '100%' : '50%'
                  }}
                >
                  <Typography
                    variant='h6'
                    style={{
                      marginBottom: 4,
                      fontFamily: styles.typography
                    }}
                  >
                    Colorado State University
                  </Typography>
                  <Typography
                    variant='body2'
                    style={{
                      fontWeight: 'lighter',
                      marginBottom: 4,
                      fontFamily: styles.typography
                    }}
                  >
                    - Master's in Project Management
                  </Typography>

                  <Typography
                    variant='body2'
                    style={{
                      fontWeight: 'lighter',
                      marginBottom: 4,
                      fontFamily: styles.typography
                    }}
                  >
                    - Emphasis on Information Technology practices and
                    methodologies
                  </Typography>
                </Box>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'flex-end'
                }}
              >
                <Typography
                  variant='h6'
                  style={{
                    fontFamily: styles.typography,
                    marginRight: 8,
                    width: '30%'
                  }}
                >
                  May 2017 - August 2019
                </Typography>
                <Box
                  className={styles.innerInfoBox}
                  style={{
                    width: smallScreen ? '100%' : '50%'
                  }}
                >
                  <Typography
                    variant='h6'
                    style={{
                      marginBottom: 4,
                      fontFamily: styles.typography
                    }}
                  >
                    MidAmerica Nazarene University
                  </Typography>
                  <Typography
                    variant='body2'
                    style={{
                      fontWeight: 'lighter',
                      marginBottom: 4,
                      fontFamily: styles.typography
                    }}
                  >
                    - Bachelor's of Science in Business Administration
                  </Typography>

                  <Typography
                    variant='body2'
                    style={{
                      fontWeight: 'lighter',
                      marginBottom: 4,
                      fontFamily: styles.typography
                    }}
                  >
                    - Took programming classes as electives
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            className={styles.sectionContainer}
            style={{
              height: smallScreen ? '50%' : '25%',
              flexDirection: smallScreen ? 'column' : 'row'
            }}
          >
            <Box
              style={{
                width: smallScreen ? '100%' : '50%',
                height: '25%'
              }}
            >
              <Box
                style={{
                  marginBottom: smallScreen ? 16 : 0,
                  marginLeft: smallScreen ? 0 : 24
                }}
              >
                <Typography
                  style={{
                    fontFamily: styles.typography
                  }}
                  variant='h4'
                >
                  Skills & Expertise
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'flex-end'
                }}
              >
                <Typography
                  variant='body2'
                  style={{
                    fontFamily: styles.typography,
                    paddingRight: 16,
                    width: '30%'
                  }}
                >
                  I have experience in the following:
                </Typography>
                <Box
                  className={styles.innerInfoBox}
                  style={{
                    width: smallScreen ? '100%' : '50%'
                  }}
                >
                  <Typography
                    variant='body2'
                    style={{
                      marginBottom: 4,
                      fontFamily: styles.typography
                    }}
                  >
                    - Typescript, Javascript, Node.JS
                  </Typography>
                  <Typography
                    variant='body2'
                    style={{
                      fontWeight: 'lighter',
                      marginBottom: 4,
                      fontFamily: styles.typography
                    }}
                  >
                    - React, React Native, Git
                  </Typography>

                  <Typography
                    variant='body2'
                    style={{
                      fontWeight: 'lighter',
                      marginBottom: 8,
                      fontFamily: styles.typography
                    }}
                  >
                    - HTML, CSS, Figma
                  </Typography>
                  <Typography
                    variant='body2'
                    style={{
                      fontWeight: 'lighter',
                      marginBottom: 8,
                      fontFamily: styles.typography
                    }}
                  >
                    - Storybook and React Testing Library
                  </Typography>
                  <Typography
                    variant='body2'
                    style={{
                      fontWeight: 'lighter',
                      marginBottom: 8,
                      fontFamily: styles.typography
                    }}
                  >
                    - Agile Methodologies and Jira
                  </Typography>
                  <Typography
                    variant='body2'
                    style={{
                      fontWeight: 'lighter',
                      marginBottom: 8,
                      fontFamily: styles.typography
                    }}
                  >
                    - GraphQL, MySQL, NoSQL
                  </Typography>
                  <Typography
                    variant='body2'
                    style={{
                      fontWeight: 'lighter',
                      marginBottom: 8,
                      fontFamily: styles.typography
                    }}
                  >
                    - Material UI and Bootstrap
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            className={styles.sectionContainer}
            style={{
              height: smallScreen ? '50%' : '25%',
              flexDirection: smallScreen ? 'column' : 'row'
            }}
          >
            <Box
              style={{
                width: smallScreen ? '100%' : '50%',
                height: '25%'
              }}
            >
              <Box
                style={{
                  marginBottom: smallScreen ? 16 : 0,
                  marginLeft: smallScreen ? 0 : 24
                }}
              >
                <Typography
                  style={{
                    fontFamily: styles.typography
                  }}
                  variant='h4'
                >
                  Interest and Hobbies
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'flex-end'
                }}
              >
                <Typography
                  variant='body2'
                  style={{
                    fontFamily: styles.typography,
                    paddingRight: 32,
                    width: '30%'
                  }}
                >
                  In my free time I enjoy these things:
                </Typography>
                <Box
                  className={styles.innerInfoBox}
                  style={{
                    width: smallScreen ? '100%' : '50%'
                  }}
                >
                  <Typography
                    variant='body2'
                    style={{
                      marginBottom: 4,
                      fontFamily: styles.typography
                    }}
                  >
                    - Photography and Videography
                  </Typography>
                  <Typography
                    variant='body2'
                    style={{
                      fontWeight: 'lighter',
                      marginBottom: 4,
                      fontFamily: styles.typography
                    }}
                  >
                    - Playing my Bass
                  </Typography>

                  <Typography
                    variant='body2'
                    style={{
                      fontWeight: 'lighter',
                      marginBottom: 8,
                      fontFamily: styles.typography
                    }}
                  >
                    - Flying Drones
                  </Typography>
                  <Typography
                    variant='body2'
                    style={{
                      fontWeight: 'lighter',
                      marginBottom: 8,
                      fontFamily: styles.typography
                    }}
                  >
                    - Watching Football
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </main>
  );
}
