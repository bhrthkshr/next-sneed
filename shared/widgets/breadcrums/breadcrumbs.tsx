import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import ApartmentIcon from "@material-ui/icons/Apartment";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import CallIcon from "@material-ui/icons/Call";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      justifyContent: "center",
      flexWrap: "wrap"
    },
    paper: {
      padding: theme.spacing(1, 2)
    },
    redButton: {
      backgroundColor: "#F54848",
    }
  })
);

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  alert("You clicked a breadcrumb.");
}

export default function BreadCrumb() {
  const classes = useStyles("");

  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Box display="flex" flexWrap="wrap">
          <Box display="flex" alignItems="center" flexGrow={1}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
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
          <Box display="flex" flexWrap="wrap">
            <Box p={1} display="flex" flexDirection="row">
              <ApartmentIcon />
              <div className="tb-padding--2"></div>
              <p className="tb-typo--body2">Book Visit</p>
            </Box>
            <Box p={1} display="flex" flexDirection="row">
              <ChatBubbleOutlineIcon />
              <div className="tb-padding--2"></div>
              <p className="tb-typo--body2">Chat</p>
            </Box>
            <Box p={1} display="flex" flexDirection="row">
              <CallIcon />
              <div className="tb-padding--2"></div>
              <p className="tb-typo--body2">Call me</p>
            </Box>
            <div className="tb-padding--8"></div>

            <Button className={classes.redButton}
              variant="contained"
              color="secondary"
              startIcon={<AccountTreeIcon />}
            >
              Add Venue to shortlist
            </Button>
          </Box>
        </Box>
      </Paper>
    </div>
  );
}
