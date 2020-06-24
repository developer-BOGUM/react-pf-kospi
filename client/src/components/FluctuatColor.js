import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const Styles = theme => ({
    blue: {
        color: '#3f51b5',
    },
    red: {
        color: '#f50057',
    },
})

class FluctuatColor extends React.Component {
    render() {
        const { classes } = this.props;
                if (this.props.fluctuat.charAt(0) === "+") {
                    return (
                     <TableCell align="right" colSpan="1" className={classes.blue}>{this.props.fluctuat}</TableCell>
                    );
                } else if (this.props.fluctuat.charAt(0) === "-"){
                    return (
                    <TableCell align="right" colSpan="1" className={classes.red}>{this.props.fluctuat}</TableCell>
                    );
                } else {
                    return (
                    <TableCell align="right" colSpan="1">{this.props.fluctuat}</TableCell>
                    );
                }            
    }
}

export default withStyles(Styles)(FluctuatColor);