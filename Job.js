import React from 'react';

export const Job = ({sdate, name, freq, desc, edate, trigger, reportd, expectedd,fallbackd}) => (
    <tr>
        <td>
            {sdate}
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
        
<td>{edate}</td>
<td>{trigger}</td>
<td>{reportd}</td>
<td>{expectedd}</td>
<td>{fallbackd}</td>
    </tr>	
)