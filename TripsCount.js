import React from 'react';
import { MdFace } from 'react-icons/md';
import { MdFavorite } from 'react-icons/md';
import { MdExplore } from 'react-icons/md';



export const TripsCount = ({total, month, week, day}) => (
    <div className="trips-count">
        <div className="content">
            <div className="total"><h1>{total}</h1>jobs</div>
            <div className="month"><h3>{month}</h3><MdFace /></div>
            <div className="week"><h3>{week}</h3><MdFavorite /></div>
            <div className="day"><h3>{day}</h3><MdExplore /></div>
        </div>
    </div>
)

