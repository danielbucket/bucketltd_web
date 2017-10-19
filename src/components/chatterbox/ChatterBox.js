import React from 'react';
import ChatterBoxApp from './chatterBoxApp/ChatterBoxApp'
const styles = require('./ChatterBox.css');

const ChatterBox = () => {

	return (
		<div style={ styles }>
			ChatterBox
			<ChatterBoxApp />
		</div>
		)
}

export default ChatterBox;