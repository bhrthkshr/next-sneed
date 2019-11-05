import { Grid, Hidden, Box } from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { createStyles, makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import ApartmentIcon from "@material-ui/icons/Apartment";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CallIcon from "@material-ui/icons/Call";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display:"flex",
      justifyContent: "center",
      flexWrap: "wrap"
    },
    redButton: {
      backgroundColor: "#F54848",
      "&:hover": {
        background: "#F54848"
      }
    }
  })
);
// {matches ? 'row' : 'column'}
function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  alert("You clicked a breadcrumb.");
}

export default function BreadCrumb() {
  const classes = useStyles("");
  const theme = useTheme();
  const ltSm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("sm"));
  // const ltSm = useMediaQuery(theme.breakpoints.down("sm"));
  const xs = useMediaQuery(theme.breakpoints.only("xs"));


  return (
    <div className={classes.root}>
      <div className="tb-card--thin tb-padding--12 tb-color-bg--white tb-width--full">
        <Box flexDirection={ltSm ? 'column' : 'row'} alignItems={ltSm ? "stretch" : "center"} display="flex" width="100">
          <Box flexDirection="row" alignItems="center" display="flex">
            <ArrowBackIcon />
            <div className="tb-padding--6"></div>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb">
              <Link color="inherit" href="/" onClick={handleClick}>
                <p className="tb-typo--body2 tb-color--grey-700">Home</p>
              </Link>
              <Link
                color="inherit"
                href="/getting-started/installation/"
                onClick={handleClick}
              >
                <p className="tb-typo--body2 tb-color--grey-700">India</p>
              </Link>
              <p className="tb-typo--body2 tb-color--grey-700">Bangalore</p>
            </Breadcrumbs>

          </Box>
          <Hidden smDown>
            <Box flexGrow="1" className="tb-padding--6"></Box>
          </Hidden>
          <Hidden mdUp>
            <Box className="tb-padding--6"></Box>
          </Hidden>
          <Box flexDirection={xs ? 'column' : 'row'} alignItems={xs ? 'flex-start' : 'center'}
            display="flex">
            {/* 2nd level */}

            <Box flexDirection="row" alignItems="center"
              display="flex">

              <Box flexDirection="row" alignItems="center"
                display="flex">
                <ApartmentIcon />
                <div className="tb-padding--4"></div>
                <p className="tb-typo--body2">Book Visit</p>
              </Box>

              <div className="tb-padding--12"></div>
              <Box flexDirection="row" alignItems="center"
                display="flex">
                <ChatBubbleOutlineIcon />
                <div className="tb-padding--4"></div>
                <p className="tb-typo--body2">Chat</p>
              </Box>

              <div className="tb-padding--12"></div>

              <Box flexDirection="row" alignItems="center"
                display="flex">
                <CallIcon />
                <div className="tb-padding--4"></div>
                <p className="tb-typo--body2">Call me</p>
              </Box>

            </Box>

            <Hidden xsDown>
              <Box flexGrow="1"></Box>
            </Hidden>
            {/* <Hidden smUp> */}
            <div className="tb-padding--6"></div>
            {/* </Hidden> */}
            <Box>
              <Button
                className={classes.redButton}
                variant="contained"
                color="secondary"
                startIcon={<AccountTreeIcon />}
              >
                Add Venue to shortlist
                </Button>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );


  // return (
  //   <div className={classes.root}>
  //     <div className="tb-card--thin tb-padding--12 tb-color-bg--white tb-width--full">
  //       <Grid container direction={ltSm ? 'column' : 'row'} justify='flex-start' alignItems={ltSm ?  "flex-start": "center"}>
  //         <Grid item xs>
  //           <Grid container direction="row"  alignItems="center">
  //             <Grid item>
  //               <ArrowBackIcon />
  //             </Grid>
  //             <Hidden xsDown>
  //               <Grid item>
  //               </Grid>
  //             </Hidden>
  //             <div className="tb-padding--6"></div>
  //             <Grid item>
  //               <Breadcrumbs
  //                 separator={<NavigateNextIcon fontSize="small" />}
  //                 aria-label="breadcrumb">
  //                 <Link color="inherit" href="/" onClick={handleClick}>
  //                   <p className="tb-typo--body2 tb-color--grey-700">Home</p>
  //                 </Link>
  //                 <Link
  //                   color="inherit"
  //                   href="/getting-started/installation/"
  //                   onClick={handleClick}
  //                 >
  //                   <p className="tb-typo--body2 tb-color--grey-700">India</p>
  //                 </Link>
  //                 <p className="tb-typo--body2 tb-color--grey-700">Bangalore</p>
  //               </Breadcrumbs>
  //             </Grid>
  //           </Grid>
  //         </Grid>
  //         <div className="tb-padding--6"></div>
  //         <Grid item xs>
  //           {/* 2nd level */}
  //           <Grid container direction={xs ? 'column' : 'row'}  alignItems={ltSm ? 'stretch' : 'center'}>
  //             <Grid item xs>
  //               <Grid container direction="row">
  //                 <Grid item xs>
  //                   <Grid container direction="row">
  //                     <ApartmentIcon />
  //                     <div className="tb-padding--4"></div>
  //                     <p className="tb-typo--body2">Book Visit</p>
  //                   </Grid>
  //                 </Grid>

  //                 <Grid item xs>
  //                   <Grid container direction="row">
  //                     <ChatBubbleOutlineIcon />
  //                     <div className="tb-padding--4"></div>
  //                     <p className="tb-typo--body2">Chat</p>
  //                   </Grid>
  //                 </Grid>

  //                 <Grid item xs>
  //                   <Grid container direction="row">
  //                     <CallIcon />
  //                     <div className="tb-padding--4"></div>
  //                     <p className="tb-typo--body2">Call me</p>
  //                   </Grid>
  //                 </Grid>
  //               </Grid>
  //             </Grid>

  //             <Grid item>
  //               <Button
  //                 className={classes.redButton}
  //                 variant="contained"
  //                 color="secondary"
  //                 startIcon={<AccountTreeIcon />}
  //               >
  //                 Add Venue to shortlist
  //               </Button>
  //             </Grid>
  //           </Grid>
  //         </Grid>
  //       </Grid>
  //     </div>
  //   </div>
  // );
}
