const React = require('react');

class Sports extends React.Component {
    render() {
        let list = this.props.sports.map( (item, index) => {
            return (
                <li><img src={'images/' + item.image}></img>{item.title}</li>
            )
        });

        return (
            <html>
                <head></head>
                <body>
                    <div>
                        <h1>{this.props.title}</h1>
                        <ul>
                            {list}
                        </ul>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Sports;