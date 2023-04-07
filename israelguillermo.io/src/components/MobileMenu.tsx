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
    <Box
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'absolute',
        backgroundColor: '#f3f3f3',
        padding: theme.spacing(1)
      }}
    >
      <>
        <Link
          style={{
            color: 'inherit'
          }}
          href='/resume'
        >
          <Typography variant='subtitle1' style={{ fontWeight: 'lighter' }}>
            Resume
          </Typography>
        </Link>

        <Link
          style={{
            color: 'inherit'
          }}
          href='/projects'
        >
          <Typography variant='subtitle1' style={{ fontWeight: 'lighter' }}>
            Projects
          </Typography>
        </Link>
        <Link
          style={{
            color: 'inherit'
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
