import React from 'react';
import { post } from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class StockAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            codeName: "",
            now: "",
            fluctuat:"",
            open: false
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            codeName:"",
            now: "",
            fluctuat:"",
            open: false
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer = () => {
        const url = '/api/stocks';
        const formData = new FormData();
        formData.append('name', this.state.codeName);
        formData.append('now', this.state.now);
        formData.append('fluctuat', this.state.fluctuat);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        })
    }

    handleClose = () => {
        this.setState({
            codeName:"",
            now: "",
            fluctuat:"",
            open: false
        })
    }

    render() {
        return (<div>
                    <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                        종목 추가하기
                    </Button>
                    <Dialog open={this.state.open} onClose={this.handleClose}>
                        <DialogTitle>종목 추가</DialogTitle>
                        <DialogContent>
                            <TextField label="이름" input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange}/><br/>
                            <TextField label="현재가" input type="text" name="now" value={this.state.now} onChange={this.handleValueChange}/><br/>
                            <TextField label="등락률" input type="text" name="fluctuat" value={this.state.fluctuat} onChange={this.handleValueChange}/><br/>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>추가</Button>
                            <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                        </DialogActions>
                    </Dialog>
                </div>
        )
    }
}

export default StockAdd;