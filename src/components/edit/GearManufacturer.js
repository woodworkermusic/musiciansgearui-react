import mgcStyles from '../../css/MusiciansGearCommon.module.css';

import { useState } from 'react';
import GearManufacturerService from '../../services/gearmanufacturerservice.ts';

function GearManufacturer() {
    const [manufacturerName, setManufacturerName] = useState('dummyname');
    const [isActive, setIsActive] = useState(false);

    const changeName = (inputText) => {
        setManufacturerName(inputText);
    }

    const changeActive = (activeValue) => {
        setIsActive(activeValue);
    }

    function addManufacturer() {
        GearManufacturerService.addManufacturer(manufacturerName, isActive, '1');
    }

    return (
        <table className={mgcStyles.stdDisplayTable}>
            <tbody>
            <tr>
                <td>Manufacturer Name:</td>
                <td><input type="text" className={mgcStyles.softInput} size="40" maxlength="60" onChange={changeName} /></td>
                <td>Active?</td>
                <td><input type="checkbox" onChange={changeActive}/></td>
                <td><button className={`${mgcStyles.customBtn} ${mgcStyles.customBtnGreen}`} onClick={addManufacturer}>Add</button></td>
                <td><button className={`${mgcStyles.customBtn} ${mgcStyles.customBtnMaroon}`}>Remove</button></td>
            </tr>
            </tbody>
        </table>
    );
}

export default GearManufacturer;