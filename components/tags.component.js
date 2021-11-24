'use strict';

const Component = require('./base.component');

const c_type = 'Tag';

const Actions = {
}

class Tag extends Component {
    /**
     * 
     * @param {*} extension 
     * @param {*} config 
     * 
     * {
     *     "label": "",
     *     "id": "", //optional
     *     "disabled": true/false // default value false
     *     "type": "flat/stroke"
     * }
     */

    constructor(extension, config) {
        super(extension);
    }

    subscribe(eventName, callback) {
        return super.subscribe(eventName, callback);
    }

    unsubscribe(listenerId) {
        return super.unsubscribe(listenerId);
    }

    dispatch(payload = null) {
        return super.dispatch(this.config, payload)
    }
}

Tag.Actions = Actions;
Tag.component_type = c_type;

module.exports = Tag;

