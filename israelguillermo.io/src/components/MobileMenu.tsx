import {
  Box,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core';
import { useRouter } from 'next/router';
import styles from './styles.module.css';

interface Props {
  open: boolean;
}

export function MobileMenu({ open }: Props) {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const router = useRouter();
  return open && smallScreen ? (
    <Box className={styles.mobileMenu}>
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
