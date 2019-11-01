import React, { Component } from "react";
import "./home.scss";
import Footer from "../../shared/footer/footer";
import Button from "@material-ui/core/Button";
import PieChart from "../../shared/charts/pie-chart";
import MyButton from "../../custom/button/button";

import { flexbox } from "@material-ui/system";
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from "clsx";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Link from "next/link";
// import "../public/style.scss";
import Box from "@material-ui/core/Box";
import SliderIReact from "../swiperGallery/swiper";

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
    menuButton: {
      marginRight: 36
    },
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap"
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 30,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(12) + 19
      }
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar
    },
    content: {
      flexGrow: 1
      // paddingLeft: theme.spacing(15),
    }
  })
);

export default function Home() {
  const classes = useStyles("");
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[
            { name: "overview", url: "/", icon: <InboxIcon /> },
            { name: "pricing", url: "/pricing", icon: <InboxIcon /> },
            { name: "Location", url: "/location", icon: <InboxIcon /> },
            { name: "Amenities", url: "/amenities", icon: <InboxIcon /> },
            { name: "Timing", url: "/timing", icon: <InboxIcon /> },
            { name: "Reviews", url: "/reviews", icon: <InboxIcon /> }
          ].map(object => (
            <ListItem button key={object.name}>
              <ListItemIcon>
                <Link href={object.url}>
                  <div className="">
                    <div className="tb-padding--left-24">{object.icon}</div>
                    <div className="tb-text-align--center">
                      <p className="tb-typo--body1">{object.name}</p>
                    </div>
                  </div>
                </Link>
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={clsx(classes.content)}>
        <div className="">
          <Box display="flex"  p={1} flexDirection="row" justifyContent="flex-end">
            <div className="slider-container border-outline">
              <SliderIReact />
            </div>
          </Box>
        </div>
      </main>
    </div>
  );
}
