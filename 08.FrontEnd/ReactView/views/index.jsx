const React = require('react');

function Greeting() {
    return (
        <div>
            <h1>React View Template Engine</h1>  
            <ul>
                <li><a href="hello">Hello</a></li>
                <li><a href="howAreYou">How are you</a></li>
                <li><a href="greeting">Greeting</a></li>
                <li><a href="sports">Sports</a></li>
            </ul>          
        </div>
    );
}

module.exports = Greeting;