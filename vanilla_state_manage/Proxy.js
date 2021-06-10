import PubSub from './PubSub.js';

class Store {
    constructor(params) {
        let self = this;

        // 클래스 내에 actions, mutations, state, status, events를 가짐
        self.actions = {};
        self.mutations = {};
        self.state = {};
        self.status = 'resting';

        // PubSub 클래스의 events 객체를 속성으로 만들어 가져옴
        self.events = new pubSub();

    }
}