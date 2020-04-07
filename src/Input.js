import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import { connect } from 'react-redux';

class Input extends Component {
  render() {
    const renderContent = this.props.success ? null : (
      <form>
        <input
          data-test='component-input-box'
          className='mb-2 mx-sm-3'
          type='text'
          placeholder='Enter guess...'
        />
        <button
          data-test='component-submit-btn'
          type='submit'
          className='btn btn-primary'
        >
          Submit
        </button>
      </form>
    );
    return <div data-test='component-input'>{renderContent}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    success: state.success,
  };
};

export default connect(mapStateToProps)(Input);
