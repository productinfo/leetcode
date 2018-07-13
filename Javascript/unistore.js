/*
// The store:
import createStore from 'unistore'

// Preact integration
import { Provider, connect } from 'unistore/preact'

// React integration
import { Provider, connect } from 'unistore/react'

import { createStore, Provider, connect } from 'unistore/full/preact'

usage:

let store = createStore({ count: 0 })

let store = createStore();
store.subscribe( state => console.log(state) );
store.setState({ a: 'b' });   // logs { a: 'b' }
store.setState({ c: 'd' });   // logs { a: 'b', c: 'd' }
*/

/**
 * An observable state container, returned from {@link createStore}
 * @name store
 */
export default function createStore(state) {

  let listeners = [];
  state = state || {};

  const unsubscribe = listener => {
    listeners = listeners.filter(l => l !== listener);
  };

  const setState = (update, overwrite, action) => {
    state = overwrite ? update : Object.assign(Object.assign({}, state), update);
    listeners.forEach(l => l(state, action));
  };

  return {
    /**
		 * Create a bound copy of the given action function.
		 * The bound returned function invokes action() and persists the result back to the store.
		 * If the return value of `action` is a Promise, the resolved value will be used as state.
		 * @param {Function} action	An action of the form `action(state, ...args) -> stateUpdate`
		 * @returns {Function} boundAction()
		 */
    action: action => (...argus) => {
      const apply = result => setState(result, false, action);
      let args = [state];
      args = args.concat(argus);
      let ret = action.apply(this, args);
      if (ret) {
        if (ret.then) ret.then(apply);
        return apply(ret);
      }
    },
    /**
		 * Apply a partial state object to the current state, invoking registered listeners.
		 * @param {Object} update				An object with properties to be merged into state
		 * @param {Boolean} [overwrite=false]	If `true`, update will replace state instead of being merged into it
		 */
    setState,
    /**
		 * Register a listener function to be called whenever state is changed. Returns an `unsubscribe()` function.
		 * @param {Function} listener	A function to call when state changes. Gets passed the new state.
		 * @returns {Function} unsubscribe()
		 */
    subscribe: fn => {
      listeners.push(fn);
      return _ => unsubscribe(fn);
    },
    /**
		 * Remove a previously-registered listener function.
		 * @param {Function} listener	The callback previously passed to `subscribe()` that should be removed.
		 * @function
		 */
    unsubscribe,
    /**
		 * Retrieve the current state object.
		 * @returns {Object} state
		 */
    getState: _ => state
  };
}
