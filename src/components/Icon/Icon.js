import React from 'react';
import Icons from 'components/Icons';

const Icon = ({ name, color }) => {
	switch (name) {
		case 'search':
			return <Icons.Search color={color} />
		case 'filter':
			return <Icons.Filter color={color} />
		case 'order':
			return <Icons.OrderBy color={color} />
		case 'star':
			return <Icons.Star color={color} />
		default:
			return null
	}
}

export default Icon