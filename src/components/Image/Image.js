import classNames from 'classnames';
import React from 'react'

const Image = ({ height, width, imgUrl, altText = 'Image', containerStyles = [] }) => {
	const imgHeight = height ? `h-[${height}px]` : 'h-full';
	const imgWidth = width ? `h-[${width}px]` : 'w-full';

	const imgContainerClasses = classNames([
		imgWidth,
		imgHeight,
		...containerStyles
	]);

	return (
		<div className={imgContainerClasses}>
			<img className='w-full h-auto' src={imgUrl} alt={altText} />
		</div>
	)
}

export default Image