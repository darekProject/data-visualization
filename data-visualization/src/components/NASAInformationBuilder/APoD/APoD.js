import React, {Component} from 'react';
import './APoD.css';

class APoD extends Component {
    state = {
        showExplanation: false
    };

    toggleSwitchExplanationHandler = () => {
        const dosesShow = this.state.showExplanation;
        this.setState({showExplanation: !dosesShow});
    };

    render() {
        let description = null;

        if (this.state.showExplanation) {
            description = (
                <div className="explanation">
                    <span>Date: {this.props.date}</span>
                    <p>{this.props.explanation}</p>
                </div>
            );
        }

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
                {description}
            </div>
        );
    }
}

export default APoD;