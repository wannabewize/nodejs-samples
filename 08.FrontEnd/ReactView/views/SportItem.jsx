const React = require('react');

function SportItem(props) {
    return (
        <li><img src={'images/' + props.item.image}></img>{props.item.title}</li>
    )
}

module.exports = SportItem;