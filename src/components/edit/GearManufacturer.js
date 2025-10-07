import mgcStyles from '../../css/MusiciansGearCommon.module.css';

import { useEffect, useState } from 'react';
import GearManufacturerService from '../../services/gearmanufacturerservice.ts';

function GearManufacturer({data, refreshData}) {
    const [manufacturerName, setManufacturerName] = useState();
    const [isActive, setIsActive] = useState();

    function addUpdate() {
        if (data.manufacturerId === 0) {
            GearManufacturerService.add(manufacturerName, isActive, '1');
        }
        else if (data.manufacturerId > 0) {
            GearManufacturerService.update(manufacturerName, isActive, '1');
        }
        refreshData();
    }
    
    useEffect(()=> {
        setManufacturerName(data.manufacturerName);
        setIsActive(data.active);
    }, [data]);

    return (
        <table className={mgcStyles.stdDisplayTable}>
            <tbody>
            <tr>
                <td>Manufacturer Name:</td>
                <td><input className={mgcStyles.softInput} size="40" maxLength="60" onChange={e => setManufacturerName(e.target.value)} value={manufacturerName} /></td>
                <td>Active?</td>
                <td><input type="checkbox" onChange={e => setIsActive(e.target.value)} checked={isActive} /></td>
                <td><button className={`${mgcStyles.customBtn} ${mgcStyles.customBtnGreen}`} onClick={addUpdate}>{data.manufacturerId === 0 ? 'Add' : 'Update'}</button></td>
            </tr>
            </tbody>
        </table>
    );
}

export default GearManufacturer;