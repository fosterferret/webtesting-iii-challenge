import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'


//initial state
export const initialState = {
	locked: false,
	closed: false,
}
//action types

export const TOGGLE_CLOSED = "TOGGLE_CLOSED"
export const TOGGLE_LOCKED = "TOGGLE_LOCKED"

//reducer
export function rootReducer(state = initialState, action) {
	switch (action.type) {
		case TOGGLE_LOCKED:
			return {
				...state,
				locked: !state.locked
			}
		case TOGGLE_CLOSED:
			return {
				...state,
				closed: !state.closed
			}
		default:
			return state
	}
}

//function for dealing with connected components via - https://testing-library.com/docs/example-react-redux
export const reducer = combineReducers({gate: rootReducer})
export const renderWithRedux = (
	ui, { initialState, store = createStore(reducer, initialState) } = {}
) => {
	return {
		...render(<Provider store={store}>{ui}</Provider>),
	}
}
