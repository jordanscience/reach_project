import React, {Component} from 'react';


class HighScore extends Component{

    render (){
        console.log(this.props.overTen);
        if (this.props.ovenTen) {
            console.log('aaaa')

            return (
            <h3>Best high score of 10 !
            <button onClick={this.props.onReset}>Reset</button>
            </h3>)

                  }
        else{
            return null
        }
    }
}

export default HighScore;