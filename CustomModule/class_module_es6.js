class Singer {
    constructor(name) {
        this.name = name;
    }
    sing() {
        console.log('sing sing');
    }
}

Singer.prototype.dance = function() {
    console.log('dance dance');
}

module.exports = Singer;