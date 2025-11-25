import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import { useEffect, useState } from 'react';
import GearManufacturerService from '../../services/gearmanufacturerservice.ts';

function GearManufacturer({data, refreshData}) {
    const [dataId, setDataId] = useState();
    const [manufacturerName, setManufacturerName] = useState();
    const [isActive, setIsActive] = useState();
    const [buttonText, setButtonText] = useState();
    const [addMode, setAddMode] = useState(false);

    function addUpdate() {
        if (dataId === 0) {
            GearManufacturerService.add(manufacturerName, isActive, '1')
                .then((response)=> {
                    if (addMode) {
                        setDataId(0);
                        setManufacturerName('');
                    }
                    else {
                        setDataId(response.manufacturerId);
                        setButtonText('Update');
                    }
                    refreshData();
                });
        }
        else if (dataId > 0) {
            GearManufacturerService.update(manufacturerName, isActive, '1').then(()=> refreshData());
        }
    }
    
    function onKeyDownCheck(e) {
        if (!addMode) return;
        
        if (e.key === "Enter") {
            addUpdate();
        }
    }
    
    useEffect(()=> {
        setManufacturerName(data.manufacturerName);
        setIsActive(data.active);
        setDataId(data.manufacturerId);
        data.manufacturerId === 0 ? setButtonText('Add') : setButtonText('Update');
    }, [data]);

    return (
        <table className={mgcStyles.stdDisplayTable}>
            <tbody>
            <tr>
                <td>Manufacturer Name:</td>
                <td><input className={mgcStyles.softInput} size="40" maxLength="60" onChange={e => setManufacturerName(e.target.value)} onKeyDown={e => onKeyDownCheck(e)} value={manufacturerName} /></td>
                <td>Active?</td>
                <td><input type="checkbox" onChange={e => setIsActive(e.target.value)} checked={isActive} /></td>
                <td><button className={`${mgcStyles.customBtn} ${mgcStyles.customBtnGreen}`} onClick={addUpdate}>{buttonText}</button></td>
                <td><input type="checkbox" onChange={e => setAddMode(e.target.value)} checked={addMode} />Lock Add Mode</td>
            </tr>
            </tbody>
        </table>
    );
}

export default GearManufacturer;