import React from 'react';
import ReactDom from 'react-dom';

class Content extends React.Component{
	render(){
	
	const { activities } = this.props;
		
		return(
			
			<div className="content">
			<div className="line" />
			 {activities.map(activity => (
          <ActivityItem activity={activity} />
        ))}
			</div>
			
		)
	}
}export default Content;