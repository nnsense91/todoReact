import React from 'react';
import classNames from 'classnames';

import './list.scss'

const List = ({ items, isRemovable, onClick }) => {
	
	return (
		<ul onClick={onClick} className="list">
			{
				items.map((item, index) => (
					<li key={index} className={classNames(item.className, {'active': item.active})}>
						<div className="list__icon-block">{item.icon ? item.icon : <div className={`circle circle--${item.color}`}></div>}</div>
						<span>{item.name}</span>
					</li>
				))
			}
		</ul>
	);
}

export default List;
