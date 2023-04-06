import { Box, IconButton, Menu, MenuItem } from '@material-ui/core';

interface Props {
  open: boolean;
}

export function MobileMenu({ open }: Props) {
  return (
    open && (
      <Box
        style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
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
    )
  );
}
