import { useCallback, useEffect, useState } from 'react';
import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import GearManufacturerService from '../../services/gearmanufacturerservice.ts';
import GearTypeService from '../../services/geartypeservice.ts';
import GearTypesByManufacturer from './GearTypesByManufacturer.js';

function GearModels() {
    const [listData, setListData] = useState([]);
    const [showHideData, setShowHide] = useState([]);

    const showHideTypes = useCallback((id) => {
        GearTypeService.getByManufacturer(id)
            .then(response => {

            });
    }, []);

    /*
    Structure:
        Where to locate add buttons?
        Manufacturer Name
            - Gear Type  
                - Gear Models
    */
    const mappedData = listData.map(listItem => (
        <div key={listItem.key}>
            <div className={mgcStyles.selectListLink} onClick={()=> showHideTypes(listItem.value.manufacturerId)}>
                <span className={mgcStyles.marginRight}>{listItem.value.manufacturerName}</span>
                <button className={`${mgcStyles.customBtn} ${mgcStyles.customBtnGreen}`}>Add</button>
            </div>
            <GearTypesByManufacturer manufacturerId={listItem.value.manufacturerId} />
        </div>
    ));

    useEffect(()=> {
        GearManufacturerService.getMany().then(response => setListData(response));
    }, []);

    return (
        <>
            <div className={mgcStyles.pageContent}>
                <span className={mgcStyles.marginRight}>GEAR MODELS:</span>
                <div className={mgcStyles.ctrlCategorizedList}>{ mappedData }</div>
            </div>
        </>
    );
}

export default GearModels;