import React from 'react';

import './list.scss'

const List = ({ items, isRemovable }) => {
	return (
		<ul className="list">
			{
				items.map(item => (
					<li className={item.active ? 'active': ''}>
						<div className="list__icon-block">{item.icon ? item.icon : <div className={`circle circle--${item.color}`}></div>}</div>
						<span>{item.name}</span>
					</li>
				))
			}
		</ul>
	);
}

export default List;