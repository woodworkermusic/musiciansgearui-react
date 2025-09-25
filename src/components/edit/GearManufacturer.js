import mgcStyles from '../../css/MusiciansGearCommon.module.css';

import { useState } from 'react';
import GearManufacturerService from '../../services/gearmanufacturerservice.ts';

function GearManufacturer({data}) {
    const [manufacturerName, setManufacturerName] = useState(data.manufacturerName);
    const [isActive, setIsActive] = useState(data.active);

    function addManufacturer() {
        GearManufacturerService.add(manufacturerName, isActive, '1');
    }

    function update() {
        GearManufacturerService.update(manufacturerName, isActive, '1');
    }

    return (
        <table className={mgcStyles.stdDisplayTable}>
            <tbody>
            <tr>
                <td>Manufacturer Name:</td>
                <td><input className={mgcStyles.softInput} size="40" maxLength="60" onChange={e => setManufacturerName(e.target.value)} value={manufacturerName} /></td>
                <td>Active?</td>
                <td><input type="checkbox" onChange={e => setIsActive(e.target.value)} checked={isActive} /></td>
                {
                    (data.manufacturerId > 0) ?
                        <td><button className={`${mgcStyles.customBtn} ${mgcStyles.customBtnGreen}`} onClick={update}>Update</button></td>
                        : null
                }
                {
                    (data.manufacturerId === 0) ?
                        <td><button className={`${mgcStyles.customBtn} ${mgcStyles.customBtnGreen}`} onClick={addManufacturer}>Add</button></td>
                        : null
                }
            </tr>
            </tbody>
        </table>
    );
}

export default GearManufacturer;