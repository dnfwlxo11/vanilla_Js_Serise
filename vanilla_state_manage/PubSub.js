const { callbackify } = require("util");

class PubSub {
    // 이벤트들을 관리하는 events라는 객체를 만듦
    constructor() {
        this.events = {};
    }

    /* 어떤 이벤트와 그후 실행 할 콜백함수를 받음
     * 만약 events에 들어온 이벤트가 없으면 새로운 배열을 할당
     * 있다면 events에 해당 이벤트 배열에 콜백함수를 넣음
     */
    subscribe(e, cb) {
        let self = this;

        if (!self.events.hasOwnProperty(e)) {
            self.events[e] = [];
        }

        return self.events[e].push(cb);
    }
    
    //
    publish(e, data = {}) {
        let self = this;

        if (!self.events.hasOwnProperty(e)) {
            return [];
        }

        return self.events[e].map(cb => callback(data));
    }
}

export default pubsub;