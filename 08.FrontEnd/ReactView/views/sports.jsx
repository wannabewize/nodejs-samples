const React = require('react');
const SportItem = require('./SportItem');

class Sports extends React.Component {
    render() {
        let items = this.props.sports.map( (item, index) => {
            return <SportItem item={item} key={index}/>
        });

        return (
            <html>
                <head></head>
                <body>
                    <div>
                        <h1>{this.props.title}</h1>
                        <ul>
                            {items}
                        </ul>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Sports;