import React from 'react';
import Icons from '../Icons';

const Icon = ({ name, color }) => {
	switch (name) {
		case 'search':
			return <Icons.Search color={color} />
	}
}

export default Icon