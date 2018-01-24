import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchAPoD} from "../../actions/actions";

import './NASAInformationBuilder.css';
import APoD from './APoD/APoD';

class NASAInformationBuilder extends Component {
    componentWillMount() {
        this.props.fetchAPoD();
    }

    renderAPoD() {
        if (this.props.nasa.data !== undefined) {
            const data = this.props.nasa.data;
            return <APoD title={data['title']} url={data['url']} date={data['date']} explanation={data['explanation']}/>
        }
    }

    render() {
        return (
            <div className="wrapper">
                {this.renderAPoD()}
                <div>
                    <Link className="btn-link" to='/by-date'>
                        Display APoD by date
                    </Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {nasa: state.nasa}
}

export default connect(mapStateToProps, {fetchAPoD})(NASAInformationBuilder);