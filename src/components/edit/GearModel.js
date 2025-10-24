import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import { useEffect, useState } from 'react';
import GearTypeService from '../../services/geartypeservice.ts';
import GearModelService from '../../services/gearmodelservice.ts';

function GearModel({gearModelId, refreshData}) {
    const [modelData, setModelData] = useState();
    const [dataId, setDataId] = useState();
    const [modelName, setModelName] = useState();
    const [isActive, setIsActive] = useState();
    const [buttonText, setButtonText] = useState();

    function addUpdate() {
        if (dataId === 0) {
            GearModelService.add(modelName, isActive, '1')
                .then((result)=> {
                    setDataId(result.gearModelId);
                    setButtonText('Update');
                    refreshData();
                });
        }
        else if (dataId > 0) {
            GearModelService.update(modelName, isActive, '1').then(()=> refreshData());
        }
    }
    useEffect(()=> {
        GearModelService.get(gearModelId).then(response => setModelData(response));
        setButtonText('Update');
    });

    return (
        <>
            <table className={mgcStyles.stdDisplayTable}>
                <tr>
                    <td>Model Name:</td>
                    <td colspan="3"><input className={mgcStyles.softInput} size="40" maxLength="60" onChange={e => setModelName(e.target.value)} value={modelName} /></td>
                    {/* <td className="smallText titleEquipType">(not set)<a href="#" className="anchorBtn anchorBtnSteel lookupGearType">?</a></td> */}
                </tr>
                <tr>
                    <td>Starting Date:</td>
                    <td><input type="date" className={mgcStyles.softInput} size="10" maxlength="10" /></td>
                    <td>Ending Date:</td>
                    <td><input type="date" className={mgcStyles.softInput} size="10" maxlength="10" /></td>
                </tr>
                <tr>
                    <td>Active?</td>
                    <td><input type="checkbox" onChange={e => setIsActive(e.target.value)} checked={isActive} /></td>
                    <td><button className={`${mgcStyles.customBtn} ${mgcStyles.customBtnGreen}`} onClick={addUpdate}>{buttonText}</button></td>
                </tr>
            </table>
            <div className={`${mgcStyles.marginTopBottom} ${mgcStyles.pageContent}`}>
                Sample Images:
                <button className={`${mgcStyles.customBtn} ${mgcStyles.customBtnGreen} ${mgcStyles.marginLeft}`}>Add</button>
            </div>
        </>
    );
}

export default GearModel;