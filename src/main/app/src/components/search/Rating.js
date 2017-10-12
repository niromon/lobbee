import React, {Component} from 'react';
import * as _ from "lodash";

class Rating extends Component {
    render() {
        return (
            <span class="rating">
                {[...Array(Math.floor(this.props.stars))].map((x,i) => <i class="tiny material-icons">star</i>)}
                {_.isInteger(this.props.stars) ? '' : <i class="tiny material-icons">half_star</i>}
            </span>
        )
    }
}

export default Rating;
