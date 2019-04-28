const React = require('react');

class HowAreYou extends React.Component {
    render() {
        const answer = 'Fine thank you, and you?'
        return (
            <div>
                <h3>Hello React Component</h3>
                <div>
                    Your Input is {this.props.value}. My Answer is {answer}.
                </div>
            </div>
        )
    }
}

module.exports = HowAreYou;