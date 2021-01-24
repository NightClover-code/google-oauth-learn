import React, { Component } from 'react';
import Modal from '../Modal';
//importing history
import history from '../../history';
//importing actions & connect
import { deleteStream, fetchStream } from '../../actions';
import { connect } from 'react-redux';
//importing link
import { Link } from 'react-router-dom';
class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  renderActions() {
    //actions in the modal
    return (
      <React.Fragment>
        <button
          className="ui negative button"
          onClick={() =>
            this.props.deleteStream(
              this.props.match.params.id
            )
          }
        >
          Delete
        </button>
        <Link className="ui button" to="/">
          Cancel
        </Link>
      </React.Fragment>
    );
  }
  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    }
    return `Are you sure you want to delete "${this.props.stream.title}"?`;
  }
  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, {
  deleteStream,
  fetchStream,
})(StreamDelete);
