import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyStockDelete from './MyStockDelete';
import { TableCell } from '@material-ui/core';



class MyStockAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    handleClickOpen = () => {
        this.setState({
            open: true
        })
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }
    myStockAdd(codekey) {
        const url = '/api/stocks/' + codekey;
        fetch(url, {
            method: 'PATCH'
        });
        this.props.stateRefresh();
        }

    render() {
        if (this.props.myattention === 0) {
        return (
                <TableCell align="center" colSpan="1">
                    <Button variant="contained" color="primary" onClick={this.handleClickOpen}>추가</Button>
                        <Dialog open={this.state.open} onClose={this.handleClose}>
                        <DialogTitle>
                            관심목록 추가
                        </DialogTitle>
                        <DialogContent>
                            <Typography gutterBottom>
                                선택한 종목을 관심목록에 추가합니다.
                            </Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="contained" color="primary" onClick={(e) => {this.myStockAdd(this.props.codekey)}}>추가</Button>
                            <Button variant="outlined" color="primary" onClick={this.handleClose}>취소</Button>
                        </DialogActions>
                    </Dialog>
                </TableCell>
        );
        }
        else {
            return (
                <MyStockDelete stateRefresh={this.props.stateRefresh} codekey={this.props.codekey} myattention={this.props.myattention}/>
            )
        }
    }
}

export default MyStockAdd;