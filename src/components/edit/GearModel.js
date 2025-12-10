import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import { useCallback, useEffect, useState } from 'react';
import GearTypeService from '../../services/geartypeservice.ts';
import GearModelService from '../../services/gearmodelservice.ts';
import SampleImages from '../list/SampleImages.js'; 
import dto_GearModel from '../../models/dto_gearmodel.ts';

function GearModel({gearModelId, manufacturerId, cbRefreshData}) {
    const [dataId, setDataId] = useState(gearModelId);
    const [modelName, setModelName] = useState();
    const [isActive, setIsActive] = useState();
    const [startYear, setStartYear] = useState();
    const [endYear, setEndYear] = useState();
    const [gearTypeId, setGearTypeId] = useState();

    const [buttonText, setButtonText] = useState();
    const [gearTypes, setGearTypes] = useState([]);

    function addUpdate() {
        let gearModel = new dto_GearModel();
        gearModel.gearModelId = dataId;
        gearModel.manufacturerId = manufacturerId;
        gearModel.gearTypeId = gearTypeId;
        gearModel.modelName = modelName;
        gearModel.startYear = startYear;
        gearModel.endYear = endYear;

        if (dataId === 0) {
            gearModel.createdBy = "system";
            GearModelService.add(gearModel)
                .then((result)=> {
                    setDataId(result.gearModelId);
                    setButtonText('Update');
                    cbRefreshData(manufacturerId, gearTypeId);
                });
        }
        else if (dataId > 0) {
            gearModel.modifiedBy = "system";
            // GearModelService.update(modelName, isActive, '1').then(()=> cbRefreshData());
        }
    }

    const mappedGearTypes = gearTypes.map(m => (
            <option key={m.key} value={m.gearTypeId}>{m.gearTypeName}</option>
        ));
    
    const loadGearModel = useCallback((gearModelId)=> {
        GearModelService.get(gearModelId).then(response => {
            setDataId(gearModelId);
            setModelName(response.modelName);
            setIsActive(response.active);
            setStartYear(response.startYear);
            setEndYear(response.endYear !== null ? response.endYear : '2026');
            setGearTypeId(response.gearTypeId);
        });
    }, []);

    useEffect(()=> {
        if ((gearModelId === undefined) || (gearModelId < 0)) return;  // has to be zero or a valid model 

        GearTypeService.getMany().then(response => {
            setGearTypes(response);
            setDataId(gearModelId);

            setModelName('');
            setIsActive(true);

            var currentYear = new Date().getFullYear();
            setStartYear(currentYear);
            setEndYear(currentYear + 1);
            setGearTypeId(0);

            if (gearModelId > 0) {
                console.log('gearModelId change; ' + gearModelId);
                loadGearModel(gearModelId);
            }

            setButtonText(gearModelId === 0 ? 'Add' :'Update');
        });
    }, [gearModelId, manufacturerId, loadGearModel]);

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
                        <td>Start Year:</td>
                        <td><input className={mgcStyles.softInput} size="5" maxLength="4" value={startYear} onChange={e => setStartYear(e.target.value)} /></td>
                        <td>End Year:</td>
                        <td><input className={mgcStyles.softInput} size="5" maxLength="4" value={endYear} onChange={e => setEndYear(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Active? <input type="checkbox" onChange={e => setIsActive(e.target.value)} checked={isActive} /></td>
                    </tr>
                </tbody>
            </table>
            <div><button className={`${mgcStyles.customBtn} ${mgcStyles.customBtnGreen}`} onClick={addUpdate}>{buttonText}</button></div>

            <SampleImages parentId={dataId} imageType={'gearmodel'} /> 
        </>
    );
}

export default GearModel;