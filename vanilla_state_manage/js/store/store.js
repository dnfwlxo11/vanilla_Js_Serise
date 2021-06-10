import PubSub from '../lib/pubsub.js';

export default class Store {
    constructor(params) {
        let self = this;

        // 클래스 내에 actions, mutations, state, status, events를 가짐
        self.actions = {};
        self.mutations = {};
        self.state = {};
        self.status = 'resting';

        // PubSub 클래스의 events 객체를 속성으로 만들어 가져옴
        self.events = new PubSub();

        // Store 클래스를 만들며 actions이나 mutations이 있으면 그래도 할당
        if (params.hasOwnProperty('actions')) {
            self.actions = params.actions;
        }

        if (params.hasOwnProperty('mutations')) {
            self.mutations = params.mutations;
        }

        // 프록시 객체를 만들어 state에 할당해 주었음
        // Component 클래스에서 stateChange 이벤트를 구독함
        self.state = new Proxy((params.state || {}), {
            set: function (state, key, value) {
                state[key] = value;
                console.log(`stateChange: ${key}: ${value}`);
                self.events.publish('stateChange', self.state);

                if (self.status !== 'mutation') {
                    console.warn(`You should use a mutation to set ${key}`);
                }

                self.status = 'resting';

                return true;
            }
        });
    }

    // dispatch는 Store에 있는 actions에서 존재하면 status를 action으로
    // 존재하지 않는다면 에러 로그를 남김
    dispatch(actionKey, payload) {

        let self = this;

        if (typeof self.actions[actionKey] !== 'function') {
            console.error(`Action "${actionKey} doesn't exist.`);
            return false;
        }

        console.groupCollapsed(`ACTION: ${actionKey}`);

        self.status = 'action';

        self.actions[actionKey](self, payload);

        console.groupEnd();

        return true;
    }

    // dispatch가 actions라면 commit은 mutations를 불러옴
    commit(mutationKey, payload) {
        let self = this;

        if (typeof self.mutations[mutationKey] !== 'function') {
            console.log(`Mutation "${mutationKey}" doesn't exist`);
            return false;
        }

        self.status = 'mutation';

        let newState = self.mutations[mutationKey](self.state, payload);

        self.state = Object.assign(self.state, newState);

        return true;
    }
}

