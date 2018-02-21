import React, {Component} from 'react';
import './APoD.css';
import APoDDescription from './APoDDescription/APoDDescription';

class APoD extends Component {
    state = {
        showExplanation: false
    };

    toggleSwitchExplanationHandler = () => {
        const doesShow = this.state.showExplanation;
        this.setState({showExplanation: !doesShow});
    };

    render() {
        return (
            <div className="box-APoD">
                <h1>Astronomy Picture of the Day</h1>
                <div className="title-APoD">
                    {this.props.title}
                </div>
                <div className="video-APoD">
                    <iframe src={this.props.url} title={this.props.title}/>
                </div>
                <button className="button-toggle" onClick={this.toggleSwitchExplanationHandler}>Show/Hide Explanation
                </button>
                {this.state.showExplanation ? <APoDDescription date={this.props.date} exp={this.props.explanation}/> : null}
            </div>
        );
    }
}

export default APoD;