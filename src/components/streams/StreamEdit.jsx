import React, { Component } from 'react';
import { editStream, fetchStream } from '../../actions';

//stream form component
import StreamForm from './StreamForm';
import { connect } from 'react-redux';

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    if (!this.props.streams) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    streams: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, { fetchStream })(
  StreamEdit
);
