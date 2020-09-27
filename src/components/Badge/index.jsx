import React from 'react';

import './badge.scss';

const Badge = ( {color, onClick, className} ) => <div onClick={onClick} className={`circle circle--${color} ${className}`}></div>

export default Badge;