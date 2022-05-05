import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import palette from 'theme/palette';

const Button = ({
	text,
	color = 'black',
	borderColor = 'black',
	variant = 'contained',
	rounded,
	iconName,
	iconColor,
	onClick = () => {},
	styles = []
}) => {
	const backgroundTheme = variant === 'contained'
		? ['border-none', `bg-${color}`]
		: [`border-${borderColor}`, 'bg-transparent'];

	const colorTheme = variant === 'contained'
		? ['text-white']
		: [`text-${color}`]

	const btnClasses = classNames([
		'flex',
		'justify-center',
		'items-center',
		'px-4',
		'py-1.5',
		'border',
		...backgroundTheme,
		...colorTheme,
		...(rounded ? ['rounded-[50px]'] : []),
		...styles

	])

	return (
			<button
				type='button'
				className={btnClasses}
				onClick={onClick}
			>
				{iconName && (
					<div className='mr-2'>
						<Icon name={iconName} color={palette[iconColor] || palette.black} />
					</div>
				)}
				{text || ''}
			</button>
	)
}

export default Button