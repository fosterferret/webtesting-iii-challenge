import React from 'react';
import Display from '../display/Display';
import Controls from '../controls/Controls';
import { connect } from 'react-redux';
import * as reduxStore from '../redux/index'

class Dashboard extends React.Component {
  state = {
    locked: false,
    closed: false,
  };

  render() {
    const { closed, locked } = this.state;

    return (
      <>
        <Display locked={locked} closed={closed} />
        <Controls
          locked={locked}
          closed={closed}
          toggleLocked={this.toggleLocked}
          toggleClosed={this.toggleClosed}
        />
      </>
    );
  }

  toggleLocked = () => {
		this.props.dispatch({ type: reduxStore.TOGGLE_LOCKED });
	};

	toggleClosed = () => {
		this.props.dispatch({ type: reduxStore.TOGGLE_CLOSED });
	};
}

export default connect(state => state.gate)(Dashboard)