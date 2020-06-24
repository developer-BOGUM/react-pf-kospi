import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from '@material-ui/core/IconButton';
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';


const useStyles = makeStyles({
  list: {
    width: 250,
    overflowY: "auto"
  },
  drawer: {
    overflow: "hidden"
  }
});


export default function Appsell() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
      <ListItem button>
      <ListItemText primary="관심종목" align="" />
      </ListItem>
      <ListItem button>
      <ListItemText primary="KOSPI 200" align="" />
      </ListItem>
      </List>
      <Divider />
      <List>
      <ListItem button>
      <ListItemText primary="전체보기" align="" />
      </ListItem>
      </List>
    </div>
  );
  
  return (
    <div>
        <IconButton className={classes.menuButton} color="inherit" onClick={toggleDrawer("left", true)}>
    <MenuIcon/>
    </IconButton>
      
      <Drawer
        classes={{
          paper: classes.drawer
        }}
        open={state.left}
        onClose={toggleDrawer("left", false)}
      >
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" align="center">주식</Typography>
          </Toolbar>
        </AppBar>
        {sideList("left")}
      </Drawer>
    </div>
  );
}
