import { EventEmitter } from './EventEmitter';

export const obj = {
    count: 0,
    handler: null,
    subscribe() {
        this.handler = () => {
            this.count++;
        };
        EventEmitter.on('click', this.handler);
    },
    unsubscribe() {
        EventEmitter.off('click', this.handler);
    },
};

export const obj1 = {
    first(...args) {
        const reversed = args.reverse();
        this.second(...reversed);
    },
    second() {},
};
