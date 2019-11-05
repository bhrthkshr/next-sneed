import { Grid, Box } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Icon from "@material-ui/core/Icon";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import Hidden from '@material-ui/core/Hidden';
import BreadCrumb from "../../shared/widgets/breadcrums/breadcrumbs";
import SpaceDetail from "../space-detail/space-detail";
import DemoCarousel from "../swiperGallery/swiper";
import styles from "./jss/homeStyle";

// import {homeStyle, theme1} from "./jss/homeStyle";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: "flex"
//     },
//     hide: {
//       display: "none"
//     },
//     drawer: {
//       flexShrink: 0,
//       whiteSpace: "nowrap"
//     },
//     toolbar: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "flex-end",
//       ...theme.mixins.toolbar
//     },
//     content: {
//       flexGrow: 1
//     }
//   })
// );

// const useStyles = makeStyles((theme1)=>createStyles(homeStyle));
const useStyles = makeStyles((theme: Theme) => styles(theme));

export default function Home() {
  const classes = useStyles({});
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const ltSm = useMediaQuery(theme.breakpoints.down("sm"));
  const xs = useMediaQuery(theme.breakpoints.only("xs"));


  return (
    <div className={classes.root}>
      <Hidden xsDown>
        <Drawer variant="permanent" className={clsx(classes.drawer)}>
          <div className={`${classes.drawerInner} ${classes.toolbar}`}></div>
          <Divider />
          <Box display="flex" flexDirection="column" alignItems="center" className={clsx(classes.drawerInner)}>
            <List>
              {[
                { name: "", url: "", icon: "" },
                { name: "overview", url: "/", icon: "/svg/overview.svg" },
                { name: "pricing", url: "/pricing", icon: "/svg/money.svg" },
                { name: "Location", url: "/location", icon: "/svg/loc.svg" },
                { name: "Amenities", url: "/amenities", icon: "/svg/wifi.svg" },
                { name: "Timing", url: "/timing", icon: "/svg/time.svg" },
                { name: "Reviews", url: "/reviews", icon: "/svg/thumbsUp.svg" }
              ].map(object => (
                <ListItem button key={object.name} className={!object.name ? 'tb-opacity--0' : ''} alignItems="center">
                      <Box flexDirection="column" width="100%" alignItems="center" display="flex">
                        <div className="tb-padding--4"></div>
                          <div className="tb-icon--20">
                            {/* <Icon> */}
                            <img
                              className="tb-image tb-text-align--center"
                              src={object.icon}
                            />
                            {/* </Icon> */}
                          </div>
                          <p className="tb-typo--h6 tb-padding--v-4 tb-text-align--center">
                            {object.name}
                          </p>
                          <div className="tb-padding--4"></div>
                        
                      </Box>
                  
                </ListItem>
              ))}
            </List>
          </Box>

        </Drawer>
      </Hidden>
      <main className={clsx(classes.content)}>
        <Grid container direction="column">
          <BreadCrumb />

          <div className="tb-container--stretched">
            <Grid container direction={ltSm ? "column" : "row"}>

              <Grid item xs>
                <Grid container direction="column" alignItems="stretch">
                  <SpaceDetail />
                </Grid>
              </Grid>

              <Grid item lg={2} md={1} />


              <Grid item xs>
                <Box flexDirection="column" alignItems={ltSm ? "center" : "stretch"} display="flex">
                  <Box alignSelf={ltSm ? "start" : "flex-end"}>
                    <p className="tb-typo--body2 tb-color--grey-900 tb-padding--12">
                      4 more branches from Awfis
                      </p>
                  </Box>
                  {/* <Box alignSelf=> */}
                  <div className={classes.slider}>
                    <DemoCarousel />
                  </div>
                  {/* </Box> */}

                </Box>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </main>
    </div>
  );
}
