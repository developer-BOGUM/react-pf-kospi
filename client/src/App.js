import React from 'react';
import './App.css';
import Stock from './components/Stock';
import Appsell from './components/Appshell';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import { Button } from '@material-ui/core';

const Styles = theme => ({
  root: {
    width: '100%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    }, 
  },

  paper: {
    margin: 11,
  },
  table: {
    minWidth: 348,
  },

});

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stocks:"",
      completed: 0,
      searchKeyword:"",
      serverCh: 0,
    }
  }

  stateRefresh = () => {
    this.setState({
      stocks:"",
      completed: 0,
      searchKeyword:""
    });
    this.callapi()
    .then(res => this.setState({stocks: res}))
    .catch(err => console.log(err));
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callapi()
    .then(res => this.setState({stocks: res}))
    .catch(err => console.log(err));
  }

  callapi = async () => {
      const response = await fetch('/api/stocks');
      const body = await response.json();
      return body; 
  }

  handleServer_1 = () => {
    this.setState({
    serverCh : 1
    });
    this.stateRefresh();
  }

  handleServer_2 = () => {
    this.setState({
    serverCh : 2
    });
    this.stateRefresh();
  }

  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
  }
  render() {
    const filteredComponents = (data) => {
      data = data.filter((c) => {
        return c.name.indexOf(this.state.searchKeyword) > -1;
      });
      return data.map((c) => {
        return <Stock stateRefresh={this.stateRefresh} key={c.codekey} codekey={c.codekey} name={c.name} now={c.now} fluctuat={c.fluctuat} myattention={c.myattention} serverCh={this.state.serverCh} />
      });
    }
    const { classes } = this.props;

    return(
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Appsell callapi={this.props.callapi}/>
            <Typography className={classes.title} variant="h6" noWrap>
              KOSPI 전체보기
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="검색하기"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                name="searchKeyword"
                value={this.state.searchKeyword}
                onChange={this.handleValueChange}
              />
            </div>
          </Toolbar>
        </AppBar>
        <Button onClick={this.handleServer_1}>누르자 제발</Button>
        <Paper className={classes.paper} >
        <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
                  <TableCell align="center" colSpan="1" className="displaynone">종목코드</TableCell>
                  <TableCell align="left" colSpan="2">종목명</TableCell>
                  <TableCell align="right" colSpan="1">현재가</TableCell>
                  <TableCell align="right" colSpan="1">등락률</TableCell>
                  <TableCell align="center" colSpan="1">관심목록</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.stocks ? 
                  filteredComponents(this.state.stocks) :
                <TableRow>
                  <TableCell align="center" colSpan="6">
                    <CircularProgress  variant="determinate" value={this.state.completed} />
                  </TableCell>  
                </TableRow>
              }
          </TableBody>
        </Table>
      </TableContainer>
      </Paper>
    </div>
    );
  }
}

export default withStyles(Styles)(App);
