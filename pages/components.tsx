import AppBar from "@material-ui/core/AppBar";
import Box from '@material-ui/core/Box';
import CssBaseline from "@material-ui/core/CssBaseline";
import { createStyles, makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import clsx from "clsx";
import React from "react";
import Home from "../components/home/home";

const drawerWidth = 100;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: "#fff",
      color: "#000",
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar
    },
    content: {
      flexGrow: 1,
      marginTop: 65,
      marginLeft:120,
    }
  })
);

export default function DrawerContainer(props) {
  const classes = useStyles("");
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <p className="tb-typo--h3">Sneed</p>
          <div className="tb-width--full">
            <Box display="flex" flexDirection="row" justifyContent="flex-end">
              <p className="tb-typo--body1">LIST SPACE</p>
              <div className="tb-padding--8"></div>
              <p className="tb-typo--body1">CONTACT</p>
              <div className="tb-padding--8"></div>

              <p className="tb-typo--body1">LOGIN</p>
            </Box>
          </div>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <Home/>
      </main>
    </div>
  );
}
