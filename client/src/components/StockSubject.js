import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const Styles = theme => ({
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
    },
})

class StockSubject extends React.Component {
    
    render() {
        const { classes } = this.props;

        if (this.props.serverCh === 1) {
            return (
                <Typography className={classes.title} variant="h6" noWrap>
                    관심목록
                </Typography>
                );
         }
         else if (this.props.serverCh === 2) {
            return (
                <Typography className={classes.title} variant="h6" noWrap>
                    KOSPI 200
                </Typography>
                );
         }
        else if (this.props.serverCh === 0) {
            return (
                <Typography className={classes.title} variant="h6" noWrap>
                    KOSPI 전체보기
                </Typography>
                );
         }
        
    }   
}

export default withStyles(Styles)(StockSubject);