import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
};
class Appshell extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false
  };
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  render() {
    const { classes } = this.props;
    const sideList = 
    <div className={classes.list}>
      <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" align="center">주식</Typography>
          </Toolbar>
      </AppBar>
      <List>
        <ListItem button onClick={this.props.handleServer_1}>
          <ListItemText primary="관심종목" align="" />
        </ListItem>
        <ListItem button onClick={this.props.handleServer_2}>
          <ListItemText primary="KOSPI 200" align="" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={this.props.handleServer_0}>
          <ListItemText primary="전체보기" align="" />
        </ListItem>
      </List>
    </div>;

    return (
         <div>
            <IconButton 
              className={classes.menuButton} 
              color="inherit" 
              onClick={this.toggleDrawer("left", true)}>
                <MenuIcon/>
            </IconButton>
            <SwipeableDrawer 
              open={this.state.left} 
              onClose={this.toggleDrawer('left', false)} 
              onOpen={this.toggleDrawer('left', true)}>
              <div 
              tabIndex={0} 
              role="button" 
              onClick={this.toggleDrawer('left', false)} 
              onKeyDown={this.toggleDrawer('left', false)}>
                {sideList}
              </div>
            </SwipeableDrawer>
          </div>
        );
      }
    }

export default withStyles(styles)(Appshell);