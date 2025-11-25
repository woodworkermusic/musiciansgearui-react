import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import { useEffect, useState } from 'react';
import GearTypeService from '../../services/geartypeservice.ts';

function GearType({data, refreshData}) {
    const [dataId, setDataId] = useState();
    const [gearTypeName, setName] = useState();
    const [isActive, setIsActive] = useState();
    const [buttonText, setButtonText] = useState();
    const [addMode, setAddMode] = useState(false);

    function addUpdate() {
        if (dataId === 0) {
            GearTypeService.add(gearTypeName, isActive, '1').then((result)=> {
                if (addMode)
                {
                    setDataId(0);
                    setName('');
                }
                else
                {
                    setDataId(result.gearTypeId);
                    setButtonText('Update');
                }
                refreshData();
            });
        }
        else if (dataId > 0) {
            GearTypeService.update(gearTypeName, isActive, '1').then(()=> {
                refreshData();
            });
        }
    }
    
    function onKeyDownCheck(e) {
        if (!addMode) return;
        
        if (e.key === "Enter") {
            addUpdate();
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
                <td><input className={mgcStyles.softInput} size="40" maxLength="60" onChange={e => setName(e.target.value)} onKeyDown={e => onKeyDownCheck(e)} value={gearTypeName} /></td>
                <td>Active?</td>
                <td><input type="checkbox" onChange={e => setIsActive(e.target.value)} checked={isActive} /></td>
                <td><button className={`${mgcStyles.customBtn} ${mgcStyles.customBtnGreen}`} onClick={addUpdate}>{buttonText}</button></td>
                <td><input type="checkbox" onChange={e => setAddMode(e.target.value)} checked={addMode} />Lock Add Mode</td>
            </tr>
            </tbody>
        </table>
    );
}

export default GearType;