import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import ReactStars from "react-stars";
import "./space-detail.scss";


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
      width:"100%"
    }
  })
);

export default function SpaceDetail() {
  const classes = useStyles("");
  const [location, setLocation] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLocation(event.target.value as string);
  };
  //   classes={selectStyles}

  return (
    <div className="tb-padding--h-36">
      <Box>
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
          <div>
            <p className="tb-typo--body2 tb-color--red-400">Verified</p>
          </div>
        </div>
        <div className="tb-padding--2"></div>
        <Box display="flex" flexWrap="wrap">
          <Box display="flex" flexDirection="row">
            <ReactStars
              count={5}
              size={24}
              color2={"#ffd700"}
              value={4}
              edit={false}
            />
            <div className="tb-padding--8"></div>
            <p className="tb-typo--body1 tb-color--amber-600 tb-flex--align-items">
              4.0
            </p>
          </Box>
          <div className="tb-padding--12"></div>
          <p className="tb-typo--body2 tb-color--grey-900 tb-flex--align-items">
            80 ratings
          </p>
          <div className="tb-padding--12"></div>
          <p className="tb-typo--body2 tb-color--grey-900 tb-flex--align-items">
            &#8226; &nbsp; 24 reviews
          </p>
        </Box>
        <div className="tb-padding--8"></div>
        <Box display="flex" flexWrap="wrap">
          <div className="tb-color-bg--red-400">
            <p className="tb-color--white tb-typo--body2 tb-padding--4-8">Premier</p>
          </div>
        <div className="tb-padding--8"></div>
          <div className="tb-color-bg--grey-500">
          <p className="tb-color--white tb-typo--body2 tb-padding--4-8">Coworking</p>
          </div>
        </Box>
        <div className="tb-padding--8"></div>
        <Box className="chipsConatiner" display="flex"  flexDirection="column">
          <Box  display="flex"  flexWrap="wrap">
          {featureItems}
          </Box>
          <div className="tb-padding--v-8">
          <Button className={classes.blueButton}  variant="contained"
              color="primary">Check Avaliability</Button>
        </div>
        </Box>
        
      </Box>
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
  <Chip key={index}
    className="tb-margin--4 tb-border--r4"
    label={item}
    variant="outlined"
  />
));
