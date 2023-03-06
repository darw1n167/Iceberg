import React from 'react';
import './Activity.css';

const ProfileActivity = () => {
	return (
		<div>
			<div className='profile-activity'>
				<h3 className='activity-title'>Activity</h3>
				<p className='activity-followers'>39 followers</p>
				<p className='activity-text'>Jacob hasn't posted lately</p>
				<p className='activity-description'>
					Jacob’s recent posts and comments will be displayed here.
				</p>
			</div>
			<div className='activity-show-all-container'>
				<span className='activity-show-all-text'>Show all activity</span>
				<i className='activity-show-all-icon'>&rarr;</i>
			</div>
		</div>
	);
};

export default ProfileActivity;
