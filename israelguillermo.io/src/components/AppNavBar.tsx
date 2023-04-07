import {
  alpha,
  makeStyles,
  Theme,
  createStyles
} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useEffect, useState } from 'react';
import { Box, useMediaQuery, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { MobileMenu } from './MobileMenu';
import CloseIcon from '@material-ui/icons/Close';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1
    }
  })
);

export default function AppNavBar() {
  const classes = useStyles();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.grow}>
      <Box
        position='sticky'
        style={{
          backgroundColor: 'transparent',
          color: 'black',
          width: '100vw',
          border: 'none'
        }}
      >
        <Toolbar>
          <IconButton>Home</IconButton>
          <Typography variant='h6' noWrap>
            Israel Guillermo
          </Typography>

          {smallScreen ? (
            <>
              <div className={classes.grow} />
              <div>
                <IconButton onClick={handleMobileMenuOpen}>
                  {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
              </div>
            </>
          ) : (
            <>
              <div className={classes.grow} />
              <div>
                <IconButton>Resume</IconButton>
                <IconButton>Projects</IconButton>
                <IconButton>Contact</IconButton>
              </div>
            </>
          )}
        </Toolbar>
      </Box>
      <MobileMenu open={isMobileMenuOpen} />
    </div>
  );
}
