import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import { useEffect, useState } from 'react';
import GearTypeService from '../../services/geartypeservice.ts';
import GearModelService from '../../services/gearmodelservice.ts';
import SampleImages from '../list/SampleImages.js'; 

function GearModel({gearModelId}) {
    // const [modelData, setModelData] = useState();
    const [dataId, setDataId] = useState();
    const [modelName, setModelName] = useState();
    const [isActive, setIsActive] = useState();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [imageIdValues, setImageIdValues] = useState([]);

    const [buttonText, setButtonText] = useState();

    function addUpdate() {
        if (dataId === 0) {
            GearModelService.add(modelName, isActive, '1')
                .then((result)=> {
                    setDataId(result.gearModelId);
                    setButtonText('Update');
                    // refreshData();
                });
        }
        else if (dataId > 0) {
            // GearModelService.update(modelName, isActive, '1').then(()=> refreshData());
        }
    }
    useEffect(()=> {
        if (gearModelId !== undefined) {
            setDataId(gearModelId);
            GearModelService.get(gearModelId).then(response => {
                setModelName(response.modelName);
                setIsActive(response.active);
                setStartDate(response.startDate);
                setEndDate(response.endDate !== null ? response.endDate : '1/1/2026');
                setImageIdValues(response.imageIdList);
            });
            setButtonText('Update');
        }
    }, [gearModelId]);

    return (
        <>
            <table className={mgcStyles.stdDisplayTable}>
                <tbody>
                    <tr>
                        <td>Model Name:</td>
                        <td colSpan="3"><input className={mgcStyles.softInput} size="40" maxLength="60" onChange={e => setModelName(e.target.value)} value={modelName} /></td>
                        {/* <td className="smallText titleEquipType">(not set)<a href="#" className="anchorBtn anchorBtnSteel lookupGearType">?</a></td> */}
                    </tr>
                    <tr>
                        <td>Starting Date:</td>
                        <td><input type="date" className={mgcStyles.softInput} size="10" maxLength="10" value={startDate} /></td>
                        <td>Ending Date:</td>
                        <td><input type="date" className={mgcStyles.softInput} size="10" maxLength="10" value={endDate} /></td>
                    </tr>
                    <tr>
                        <td>Active?</td>
                        <td><input type="checkbox" onChange={e => setIsActive(e.target.value)} checked={isActive} /></td>
                        <td><button className={`${mgcStyles.customBtn} ${mgcStyles.customBtnGreen}`} onClick={addUpdate}>{buttonText}</button></td>
                    </tr>
                </tbody>
            </table>
            <SampleImages parentId={dataId} idValues={imageIdValues} imageType={'gearmodel'} />
        </>
    );
}

export default GearModel;