import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import FluctuatColor from './FluctuatColor';
import MyStockAdd from './MyStockAdd';
import './Stock.css';

class Stock extends React.Component {
    render() {
        if(this.props.serverCh === 1) {
            if(this.props.myattention === 1) {
                return (
                        <TableRow>
                            <TableCell align="center" colSpan="1" className="displaynone">{this.props.codekey}</TableCell>
                            <TableCell align="left" colSpan="1">{this.props.name}</TableCell>
                            <TableCell align="right" colSpan="1">{this.props.now}</TableCell>
                            <FluctuatColor fluctuat={this.props.fluctuat}/>
                            <MyStockAdd stateRefresh={this.props.stateRefresh} codekey={this.props.codekey} myattention={this.props.myattention}/>
                         </TableRow>
                        );
             }
             else {
                return null;
             }
        }
        else if(this.props.serverCh === 2) {
            if(this.props.index200 === 1) {
                return (
                        <TableRow>
                            <TableCell align="center" colSpan="1" className="displaynone">{this.props.codekey}</TableCell>
                            <TableCell align="left" colSpan="1">{this.props.name}</TableCell>
                            <TableCell align="right" colSpan="1">{this.props.now}</TableCell>
                            <FluctuatColor fluctuat={this.props.fluctuat}/>
                            <MyStockAdd stateRefresh={this.props.stateRefresh} codekey={this.props.codekey} myattention={this.props.myattention}/>
                         </TableRow>
                        );
             }
             else {
                return null;
             }
                
        }
        else if (this.props.serverCh === 0) {
            return (
                <TableRow>
                    <TableCell align="center" colSpan="1" className="displaynone">{this.props.codekey}</TableCell>
                    <TableCell align="left" colSpan="1">{this.props.name}</TableCell>
                    <TableCell align="right" colSpan="1">{this.props.now}</TableCell>
                    <FluctuatColor fluctuat={this.props.fluctuat}/>
                    <MyStockAdd stateRefresh={this.props.stateRefresh} codekey={this.props.codekey} myattention={this.props.myattention}/>
                 </TableRow>
                );
         }
        
    }   
}

export default Stock;