import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { useEffect, useState } from 'react';
import { Box, useMediaQuery, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { MobileMenu } from './MobileMenu';
import CloseIcon from '@material-ui/icons/Close';
import styles from './styles.module.css';
import classNames from 'classnames';
import Link from 'next/link';

import { useRouter } from 'next/router';
export default function AppNavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const router = useRouter();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [router]);

  return (
    <Box className={styles.navbar}>
      <Toolbar>
        <Link href='/' style={{ textDecoration: 'none' }}>
          <Typography
            style={{ fontFamily: styles.typography }}
            variant='h6'
            noWrap
            className={styles.navName}
          >
            <img src='/favicon.ico' width={20} style={{ marginRight: 8 }} />
            Israel Guillermo
          </Typography>
        </Link>

        {smallScreen ? (
          <>
            <Box className={styles.grow} />
            <Box>
              <IconButton onClick={handleMobileMenuOpen}>
                {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
          </>
        ) : (
          <>
            <Box className={styles.grow} />
            <Box className={styles.navbarButtonContainer}>
              <Link
                style={{
                  color: router.asPath === '/resume' ? '#e4a92a' : 'inherit'
                }}
                href='/resume'
                className={styles.navbarButton}
              >
                <Typography
                  variant='subtitle1'
                  style={{ fontWeight: 'lighter' }}
                >
                  Resume
                </Typography>
              </Link>

              <Link
                style={{
                  color: router.asPath === '/projects' ? '#e4a92a' : 'inherit'
                }}
                href='/projects'
                className={classNames(
                  styles.middleNavButton,
                  styles.navbarButton
                )}
              >
                <Typography style={{ fontWeight: 'lighter' }}>
                  Projects
                </Typography>
              </Link>

              <Link
                style={{
                  color: router.asPath === '/contact' ? '#e4a92a' : 'inherit'
                }}
                href='/contact'
                className={styles.navbarButton}
              >
                <Typography
                  variant='subtitle1'
                  style={{ fontWeight: 'lighter' }}
                >
                  Contact
                </Typography>
              </Link>
            </Box>
          </>
        )}
      </Toolbar>
      <MobileMenu open={isMobileMenuOpen} />
    </Box>
  );
}
