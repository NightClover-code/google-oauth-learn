import React from 'react';
import Modal from '../Modal';
//importing history
import history from '../../history';
//importing actions & connect
import { deleteStream } from '../../actions';
import { connect } from 'react-redux';
const StreamDelete = ({ deleteStream, match }) => {
  //actions in the modal
  const actions = (
    <React.Fragment>
      <button
        className="ui negative button"
        onClick={() => deleteStream(match.params.id)}
      >
        Delete
      </button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );
  return (
    <div>
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
        onDismiss={() => history.push('/')}
      />
    </div>
  );
};

export default connect(null, { deleteStream })(
  StreamDelete
);
