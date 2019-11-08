import {createStore} from 'redux';

const store = createStore((state = {count: 0}, action) => {
    switch (action.type) {
        case 'Increment':
            return {
                count: state.count + 1
            };
        case 'Decrement':
            return {
                count: state.count -1
            };
        case 'Reset':
            return {
                count: 0
            };
    }
    
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})


store.dispatch ({
    type: 'Increment'
});

store.dispatch ({
    type: 'Increment'
});

unsubscribe();

store.dispatch ({
    type: 'Reset'
});

store.dispatch ({
    type: 'Decrement'
});

