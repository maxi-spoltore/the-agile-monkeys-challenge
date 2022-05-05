import React from 'react';
import Icons from '../Icons';

const Icon = ({ name, color }) => {
	switch (name) {
		case 'search':
			return <Icons.Search color={color} />
		case 'filter':
			return <Icons.Filter color={color} />
		case 'order':
			return <Icons.OrderBy color={color} />
		default:
			return null
	}
}

export default Icon