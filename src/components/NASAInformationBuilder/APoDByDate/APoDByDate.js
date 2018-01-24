import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from "../../../actions/actions";
import {MuiThemeProvider} from 'material-ui/styles'
import DatePicker from 'material-ui/DatePicker';
import APoD from '../APoD/APoD';

import './APoDByDate.css';
import '../NASAInformationBuilder.css'

class APoDByDate extends Component {
    handleChangeDate = (event, date) => {
        const dateToApi = new Date(date);
        if (dateToApi < new Date()) {
            const stringDate = `${dateToApi.getFullYear()}-${dateToApi.getMonth() + 1}-${dateToApi.getDate()}`;
            this.props.fetchAPoDByDate(stringDate);
        }
    };

    renderAPoDByDate = () => {
        if (this.props.nasa.date !== undefined) {
            const data = this.props.nasa.date;
            return <APoD title={data['title']} url={data['url']} date={data['date']} explanation={data['explanation']}/>
        }
    };

    render() {
        return (
            <div className="wrapper">
                <p className="choose-date">Choose date:</p>
                <MuiThemeProvider muiTheme={this.muiTheme}>
                    <DatePicker
                        hintText="Controlled Date Input"
                        onChange={this.handleChangeDate}
                    />
                </MuiThemeProvider>
                {this.renderAPoDByDate()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({nasa: state.nasa});

export default connect(mapStateToProps, actions)(APoDByDate);