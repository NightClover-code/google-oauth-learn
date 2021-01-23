import React, { Component } from 'react';

//importing components
import StreamForm from './StreamForm';
//importing connect & actions
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends Component {
  onSubmit = values => {
    this.props.createStream(values);
  };
  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(
  StreamCreate
);
