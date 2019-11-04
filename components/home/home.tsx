import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { createStyles, makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import BreadCrumb from "../../shared/widgets/breadcrums/breadcrumbs";
import SpaceDetail from "../space-detail/space-detail";
import DemoCarousel from "../swiperGallery/swiper";
import "./home.scss";


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
      minWidth: drawerWidth,
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
      width: theme.spacing(10) + 24,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(10) + 24
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
            { name: "overview", url: "/", icon: "/svg/overview.svg" },
            { name: "pricing", url: "/pricing", icon: "/svg/money.svg" },
            { name: "Location", url: "/location", icon: "/svg/loc.svg" },
            { name: "Amenities", url: "/amenities", icon: "/svg/wifi.svg" },
            { name: "Timing", url: "/timing", icon: "/svg/time.svg" },
            { name: "Reviews", url: "/reviews", icon: "/svg/thumbsUp.svg" }
          ].map(object => (
            <ListItem button key={object.name}>
              <ListItemIcon>
                <Link href={object.url}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                  >
                    <div className="tb-width--full tb-flex--justify-center">
                      <Box className="tb-icon--24">
                        <Icon>
                          <img
                            className="tb-image tb-text-align--center"
                            src={object.icon}
                          />
                        </Icon>
                      </Box>
                    </div>
                    <div className="tb-width--full">
                      <p className="tb-opacity--0 tb-height--1">
                        dummy text text
                      </p>
                      <p className="tb-typo--body1 tb-text-align--center">{object.name}</p>
                    </div>
                  </Box>
                </Link>
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={clsx(classes.content)}>
        <div className="tb-padding--2"></div>
        <BreadCrumb />
        <Box display="flex" flexWrap="wrap">
          <Box display="flex" flexGrow={1}>
            <div>
              <SpaceDetail />
            </div>
          </Box>
          <Box
            display="flex"
            p={1}
            flexDirection="row"
            justifyContent="flex-end"
          >
            <div className="slider-container border-outline">
              <DemoCarousel />
            </div>
          </Box>
        </Box>
      </main>
    </div>
  );
}
