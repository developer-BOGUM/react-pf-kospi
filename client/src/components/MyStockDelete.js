import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TableCell } from '@material-ui/core';


class MyStockDelete extends React.Component {

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
            method: 'DELETE'
        });
        this.props.stateRefresh();
        }

    render() {
        return (
            <TableCell align="center" colSpan="1">
                <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>제거</Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>
                        관심목록 제거
                    </DialogTitle>
                    <DialogContent>
                        <Typography gutterBottom>
                            선택한 종목을 관심목록에서 제거합니다.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={(e) => {this.myStockAdd(this.props.codekey)}}>제거</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>취소</Button>
                    </DialogActions>
                </Dialog>
            </TableCell>
        )
    }
}

export default MyStockDelete;