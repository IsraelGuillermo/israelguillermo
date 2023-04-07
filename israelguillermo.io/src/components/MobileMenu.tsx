import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme
} from '@material-ui/core';
import zIndex from '@material-ui/core/styles/zIndex';

interface Props {
  open: boolean;
}

export function MobileMenu({ open }: Props) {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
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
        <MenuItem>
          <IconButton aria-label='show 4 new mails' color='inherit'>
            Resume
          </IconButton>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label='show 4 new mails' color='inherit'>
            Projects
          </IconButton>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label='show 4 new mails' color='inherit'>
            Contact
          </IconButton>
        </MenuItem>
      </>
    </Box>
  ) : null;
}
