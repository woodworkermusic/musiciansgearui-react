import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import { useEffect, useState } from 'react';
import GearTypeService from '../../services/geartypeservice.ts';
import GearModelService from '../../services/gearmodelservice.ts';
import SampleImages from '../list/SampleImages.js'; 
import dto_GearModel from '../../models/dto_gearmodel.ts';

function GearModel({gearModelId, manufacturerId}) {
    const [dataId, setDataId] = useState(gearModelId);
    const [modelName, setModelName] = useState();
    const [isActive, setIsActive] = useState();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [gearTypeId, setGearTypeId] = useState();
    const [imageIdValues, setImageIdValues] = useState([]);

    const [buttonText, setButtonText] = useState();
    const [gearTypes, setGearTypes] = useState([]);

    function addUpdate() {
        let gearModel = new dto_GearModel();
        gearModel.gearModelId = dataId;
        gearModel.manufacturerId = manufacturerId;
        gearModel.gearTypeId = gearTypeId;
        gearModel.modelName = modelName;
        gearModel.startingDate = startDate;
        gearModel.endingDate = endDate;

        if (dataId === 0) {
            gearModel.createdBy = "system";
            GearModelService.add(gearModel)
                .then((result)=> {
                    setDataId(result.gearModelId);
                    setButtonText('Update');
                    // refreshData();
                });
        }
        else if (dataId > 0) {
            gearModel.modifiedBy = "system";
            // GearModelService.update(modelName, isActive, '1').then(()=> refreshData());
        }
    }

    const mappedGearTypes = gearTypes.map(m => (
            <option key={m.key} value={m.value.gearTypeId}>{m.value.gearTypeName}</option>
        ));
    
    useEffect(()=> {
        if (gearModelId === undefined) return;  // has to be zero or a valid model 

        GearTypeService.get(0).then(response => {
            setGearTypes(response);
        });

        setDataId(gearModelId);
        setModelName('');
        setIsActive(true);
        setStartDate(new Date().toLocaleDateString('en-CA'));
        setEndDate('2026-01-01');
        setGearTypeId(0);
        setImageIdValues([]);

        if (gearModelId > 0) {
            GearModelService.get(gearModelId).then(response => {
                setModelName(response.modelName);
                setIsActive(response.active);
                setStartDate(new Date(response.startingDate).toLocaleDateString('en-CA'));
                setEndDate(response.endingDate !== null ? new Date(response.endingDate).toLocaleDateString('en-CA') : '2026-01-01');
                setGearTypeId(response.gearTypeId);
                setImageIdValues(response.imageIdList);
            });
        }
        setButtonText(gearModelId === 0 ? 'Add' :'Update');
    }, [gearModelId, manufacturerId]);

    return (
        <>
            <table className={mgcStyles.stdDisplayTable}>
                <tbody>
                    <tr>
                        <td>Gear Type:</td>
                        <td><select className={mgcStyles.softInput} id="lstGearTypes" value={gearTypeId} 
                            onChange={e => setGearTypeId(e.target.value)} disabled={dataId > 0}>{mappedGearTypes}</select></td>
                    </tr>
                    <tr>
                        <td>Model Name:</td>
                        <td colSpan="3"><input className={mgcStyles.softInput} size="40" maxLength="60" onChange={e => setModelName(e.target.value)} value={modelName} /></td>
                    </tr>
                    <tr>
                        <td>Starting Date:</td>
                        <td><input type="date" className={mgcStyles.softInput} size="10" maxLength="10" value={startDate} /></td>
                        <td>Ending Date:</td>
                        <td><input type="date" className={mgcStyles.softInput} size="10" maxLength="10" value={endDate} /></td>
                    </tr>
                    <tr>
                        <td>Active? <input type="checkbox" onChange={e => setIsActive(e.target.value)} checked={isActive} /></td>
                    </tr>
                </tbody>
            </table>
            <div><button className={`${mgcStyles.customBtn} ${mgcStyles.customBtnGreen}`} onClick={addUpdate}>{buttonText}</button></div>
            <SampleImages parentId={dataId} idValues={imageIdValues} imageType={'gearmodel'} /> 
        </>
    );
}

export default GearModel;