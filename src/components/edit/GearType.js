import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import { useEffect, useState } from 'react';
import GearTypeService from '../../services/geartypeservice.ts';

function GearType({data, refreshData}) {
    const [dataId, setDataId] = useState();
    const [gearTypeName, setName] = useState();
    const [isActive, setIsActive] = useState();
    const [buttonText, setButtonText] = useState();

    function addUpdate() {
        if (dataId === 0) {
            GearTypeService.add(gearTypeName, isActive, '1').then((result)=> {
                setDataId(result.gearTypeId);
                setButtonText('Update');
                refreshData();
            });
        }
        else if (dataId > 0) {
            GearTypeService.update(gearTypeName, isActive, '1').then(()=> {
                refreshData();
            });
        }
    }
    
    useEffect(()=> {
        setName(data.gearTypeName);
        setIsActive(data.active);
        setDataId(data.gearTypeId);
        data.gearTypeId === 0 ? setButtonText('Add') : setButtonText('Update');
    }, [data]);

    return (
        <table className={mgcStyles.stdDisplayTable}>
            <tbody>
            <tr>
                <td>Manufacturer Name:</td>
                <td><input className={mgcStyles.softInput} size="40" maxLength="60" onChange={e => setName(e.target.value)} value={gearTypeName} /></td>
                <td>Active?</td>
                <td><input type="checkbox" onChange={e => setIsActive(e.target.value)} checked={isActive} /></td>
                <td><button className={`${mgcStyles.customBtn} ${mgcStyles.customBtnGreen}`} onClick={addUpdate}>{buttonText}</button></td>
            </tr>
            </tbody>
        </table>
    );
}

export default GearType;