import React from 'react';

class MyAtt extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    myAtt() {
        const url = '/api/stocks/';
        fetch(url, {
            method: 'POST'
        });
        this.props.stateRefresh();
        }
    render() {
        return (
            <ListItem button>
                <ListItemText primary="관심종목" align="" />
            </ListItem>
            
        );

    }
}

export default MyAtt;