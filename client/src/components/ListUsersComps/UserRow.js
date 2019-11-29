import React from 'react';
import PropTypes from 'prop-types';

const UserRow = ({ user, deleteUser }) => {
  return (
    <li className="list-group-item">
    	<div className="row">
	    	<div className="col-9">
	    		<h4 className="text-left">
					{`${user.firstName} ${user.lastName}`}
				</h4>
	    	</div>
	    	<div className="col">
	    		<a href={`/edituser/${user._id}`} className="btn btn-success btn-block">
	    			Edit
	    		</a>
	    	</div>
	    	<div className="col">
	    		<button className="btn btn-danger btn-block"
	    				onClick={() => deleteUser(user._id) } >
	    			Delete
	    		</button>
	    	</div>
    	</div>
    </li>
  )
}

UserRow.propTypes = {
	user: PropTypes.object.isRequired,
	deleteUser: PropTypes.func.isRequired,
}

export default UserRow;