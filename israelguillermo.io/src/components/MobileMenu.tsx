import {
  Box,
  Link,
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core';
import { useEffect } from 'react';
import styles from './styles.module.css';

interface Props {
  open: boolean;
}

export function MobileMenu({ open }: Props) {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  useEffect(() => {
    open
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [open]);
  return open && smallScreen ? (
    <Box className={styles.mobileMenu} style={{ overflowY: 'auto' }}>
      <>
        <Link
          style={{
            color: 'inherit',
            margin: 8
          }}
          href='/resume'
        >
          <Typography variant='subtitle1' style={{ fontWeight: 'lighter' }}>
            Resume
          </Typography>
        </Link>

        <Link
          style={{
            color: 'inherit',
            margin: 8
          }}
          href='/projects'
        >
          <Typography variant='subtitle1' style={{ fontWeight: 'lighter' }}>
            Projects
          </Typography>
        </Link>
        <Link
          style={{
            color: 'inherit',
            margin: 8
          }}
          href='/contact'
        >
          <Typography variant='subtitle1' style={{ fontWeight: 'lighter' }}>
            Contact
          </Typography>
        </Link>
      </>
    </Box>
  ) : null;
}
