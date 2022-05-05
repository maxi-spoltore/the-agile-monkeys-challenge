import classNames from 'classnames';
import React from 'react';
import Image from '../Image';
import Button from '../Button';

const InfoCard = ({
	imgUrl,
	altText,
	btnText,
	title,
	subtitle,
	imgPosition = 'right'
}) => {

	const contentPosition = {
		image: classNames([
			...(imgPosition === 'right' ? ['col-start-2'] : ['col-start-1', 'col-end-2'])
		]),
		content: classNames([
			...(imgPosition === 'right' ? ['col-start-1', 'col-end-2'] : ['col-start-2'])
		])  
	};

	const contentClasses = classNames([
		'bg-white',
		'flex',
		'justify-center',
		'items-center',
		contentPosition.content
	]);

	const renderCTABtn = () => (
		<div className='mt-8'>
			<Button
				text={btnText}
				color='dark-charcoal'
				borderColor='black'
				variant='outlined'
				styles={['w-[157px]', 'h-14', 'rounded-[50px]']}
			/>
		</div>
	)

	return (
		<div className='grid grid-cols-2'>
			<div className={contentClasses}>
				<div className='w-full max-w-[551px] text-dark-charcoal'>
					<h3 className='text-[2rem] leading-10 font-bold mb-2'>{title}</h3>
					<p className='text-xl leading-8'>{subtitle}</p>
					{renderCTABtn()}
				</div>
			</div>
			<div className={contentPosition.image}>
				<Image imgUrl={imgUrl} alt={altText} />
			</div>
		</div>
	)
}

export default InfoCard