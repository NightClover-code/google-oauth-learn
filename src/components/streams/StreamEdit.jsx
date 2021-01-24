import React, { Component } from 'react';
import { editStream, fetchStream } from '../../actions';
//using lodash
import _ from 'lodash';
//stream form component
import StreamForm from './StreamForm';
import { connect } from 'react-redux';

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onSubmit = values => {
    this.props.editStream(
      this.props.match.params.id,
      values
    );
  };
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(
            this.props.stream,
            'title',
            'description'
          )}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, {
  fetchStream,
  editStream,
})(StreamEdit);
