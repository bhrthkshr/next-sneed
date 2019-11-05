import { Grid, Icon } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { createStyles, makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from "react";
import ReactStars from "react-stars";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    blueButton: {
      backgroundColor: "#33A0FF",
      width: "100%",
      "&:hover": {
        background: "#33A0FF"
      }
    }
  })
);

export default function SpaceDetail() {
  const classes = useStyles("");
  const [location, setLocation] = React.useState("");
  const theme = useTheme();
  const ltSm = useMediaQuery(theme.breakpoints.down("sm"));
  const xs = useMediaQuery(theme.breakpoints.only("xs"));

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLocation(event.target.value as string);
  };
  //   classes={selectStyles}

  return (
    <div>
      <Grid container direction="column" alignItems="stretch">
        <div className="tb-width--76">
          <img src="/images/awfis.png" className="tb-image" />
        </div>
        <div>
          <h3 className="tb-typo--h3">Awfis St Marks Road</h3>
          <div>
            <FormControl className={classes.formControl}>
              <Select
                value={location}
                displayEmpty
                disableUnderline={true}
                onChange={handleChange}
              >
                <MenuItem value="">St Marks Road</MenuItem>
                <MenuItem value={20}>St Marks Road</MenuItem>
                <MenuItem value={30}>St Marks Road</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Box display="flex" flexDirection="row">
            <p className="tb-typo--body2 tb-color--red-400">Verified</p>
            <div className="tb-padding--6"></div>
            <div className="tb-icon--16">
              <Icon>
                <img
                  className="tb-image tb-text-align--center"
                  src="/svg/verified.svg"
                />
              </Icon>
            </div>
          </Box>
        </div>
        <div className="tb-padding--2"></div>

        <Grid container alignItems="center">
          <Box display="flex" flexWrap="wrap" alignItems="center">
            <ReactStars
              count={5}
              size={24}
              color2={"#ffd700"}
              value={4}
              edit={false}
            />
            <div className="tb-padding--4"></div>
            <p className="tb-typo--body1 tb-color--amber-600">4.0</p>
          </Box>
          <div className="tb-padding--8"></div>
          <Box display="flex" flexWrap="wrap">
            <p className="tb-typo--body2 tb-color--grey-900">80 ratings</p>
          </Box>
          <div className="tb-padding--8"></div>
          <Box display="flex" flexWrap="wrap">
            <p className="tb-typo--body2 tb-color--grey-900">
              &#8226; &nbsp; 24 reviews
            </p>
          </Box>
        </Grid>

        <div className="tb-padding--8"></div>
        <Grid container direction="row" alignItems="center">
          <div className="tb-color-bg--red-400">
            <p className="tb-color--white tb-typo--body2 tb-padding--4-8">
              Premier
            </p>
          </div>
          <div className="tb-padding--8"></div>
          <div className="tb-color-bg--grey-500">
            <p className="tb-color--white tb-typo--body2 tb-padding--4-8">
              Coworking
            </p>
          </div>
        </Grid>

        <div className="tb-padding--12"></div>
        <Box display="flex" flexWrap="wrap">
          {featureItems}
        </Box>
        <Grid>
          <div className="tb-padding--v-12">
            <Button
              className={classes.blueButton}
              variant="contained"
              color="primary"
            >
              Check Avaliability
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

let _mFeatures = [
  "Individual",
  "Private Room",
  "Training/Event spcae",
  "Meeting space",
  "Virtual space"
];

const featureItems = _mFeatures.map((item, index) => (
  <Chip
    key={index}
    className="tb-margin--4 tb-border--r4"
    label={item}
    variant="outlined"
  />
));
