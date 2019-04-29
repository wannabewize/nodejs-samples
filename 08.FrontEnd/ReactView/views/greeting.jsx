const React = require('react');
const Hello = require('./hello');

function Greeting() {
    return (
        <div>
            <h3>컴포넌트 조합</h3>
            <Hello />
        </div>
    );
}

module.exports = Greeting;