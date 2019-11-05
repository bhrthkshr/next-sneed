import { Grid } from "@material-ui/core";
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
      <Drawer variant="permanent" className={clsx(classes.drawer)}>
        <div className={classes.toolbar}></div>
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
                  <Grid container direction="column" alignItems="center">
                    <Grid item>
                      <div className="tb-icon--24">
                        <Icon>
                          <img
                            className="tb-image tb-text-align--center"
                            src={object.icon}
                          />
                        </Icon>
                      </div>
                    </Grid>
                    <Grid item>
                      <p className="tb-typo--body1 tb-text-align--center">
                        {object.name}
                      </p>
                    </Grid>
                  </Grid>
                </Link>
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Drawer>

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

              <Grid item lg={2} md={1}/>


               <Grid item xs>
               <Grid container direction="column" alignItems="stretch">
                  <Grid item xs>
                    <Grid container justify={ltSm ? "flex-start" : "flex-end"}>
                      <p className="tb-typo--body2 tb-color--grey-900 tb-padding--12">
                        4 more branches from Awfis
                      </p>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <div className={classes.slider}>
                  <DemoCarousel />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </main>
    </div>
  );
}
