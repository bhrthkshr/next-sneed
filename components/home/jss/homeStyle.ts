import { Theme, createStyles} from "@material-ui/core/styles";


// export const theme1: Theme = {} as any


// export const homeStyle = {
//   root: {
//     display: "flex"
//   },
//   hide: {
//     display: "none"
//   },
//   drawer: {
//     width: 100,
//     flexShrink: 0,
//     whiteSpace: "nowrap" as any
//   },
//   toolbar: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     ...theme1.mixins.toolbar
//   },
//   content: {
//     flexGrow: 1
//   }
// };


const homeStyle = (theme: Theme)=>createStyles({
  root: {
    display: "flex"
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: 100,
    flexShrink: 0,
    whiteSpace: "nowrap" as any
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1
  },
  slider: {
  
    [theme.breakpoints.down('sm')]: {
      width:"70vw"

    },
    [theme.breakpoints.up('md')]: {
      maxWidth:"45vw"
    },
  }
});

export default homeStyle;
