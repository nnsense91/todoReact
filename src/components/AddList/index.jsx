import React, { useState } from 'react';
import List from '../List';
import Badge from '../Badge'
import closeSvg from '../../assets/img/close.svg'

import './AddList.scss'

const AddList = ( {colors} ) => {

	const [visiblePopup, setVisiblePopup] = useState(false);
	const [selectedColor, setSelectedColor] = useState(1);

	return (
		<div className="add-list">
			<List 
			onClick={() => setVisiblePopup(!visiblePopup)}
				items={[
					{
						className: "list__add-button",
						icon: <svg width="11" height="11" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						<path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>,
						name: 'Добавить список',
					}
				]}
			/>
			{visiblePopup && (<div className="add-list__popup">
				<img onClick={()=> setVisiblePopup(false)} src={closeSvg} alt="Close button" className="add-list__popup-close-btn"/>
				<input type="text" placeholder="Название списка" className="field"></input>
				<div className="add-list__popup-colors">
					{
						colors.map(color => (
							<Badge
								onClick={()=> setSelectedColor(color.id)}
								key={color.id}
								color={color.name}
								className={selectedColor === color.id && 'active'}
							/>
						))
					}
				</div>
				<button className="button">Добавить</button>
			</div>)}
		</div>
	);
}

export default AddList;
