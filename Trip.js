import React from 'react';

export const Trip = ({date, name, type}) => (
    <tr>
        <td>
            {date}
        </td>
        <td>
            {name}
        </td>
        <td>
            {type}
        </td>
    </tr>	
)