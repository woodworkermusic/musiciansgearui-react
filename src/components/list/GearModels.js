import { useCallback, useEffect, useState } from 'react';
import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import GearManufacturer from '../edit/GearManufacturer.js';
import GearManufacturerService from '../../services/gearmanufacturerservice.ts';
import dto_GearManufacturer from '../../models/dto_gearmanufacturer.ts';

function GearModels() {
    const [manufacturerList, setManufacturerList] = useState([]);
    const [listData, setListData] = useState([]);
    const [showEdit, setShowEdit] = useState(false);
    const [mfrData, setData] = useState();

    const selectManufacturer = useCallback((id) => {
        GearManufacturerService.get(id)
            .then(response => {
                setData(response);
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
            <div className={mgcStyles.selectListLink} onClick={()=> selectManufacturer(listItem.value.manufacturerId)}>
                {listItem.value.manufacturerName}
            </div>
            <ul>geartypes</ul>
            <ul>gearmodels</ul>
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