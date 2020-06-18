import React from 'react';

export const Job = ({date, name, freq, desc}) => (
    <tr>
        <td>
            {date}
        </td>
        <td>
            {name}
        </td>
        <td>
            {freq}
        </td>
        <td>
            {desc}
        </td>
    </tr>	
)