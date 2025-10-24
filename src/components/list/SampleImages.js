import { useCallback, useEffect, useState } from 'react';
import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import GearManufacturer from '../edit/GearManufacturer.js';
import GearManufacturerService from '../../services/gearmanufacturerservice.ts';
import dto_GearManufacturer from '../../models/dto_gearmanufacturer.ts';

function SampleImages() {
    const [listData, setListData] = useState([]);
    const [showEdit, setShowEdit] = useState(false);

    const mappedData = listData.map(listItem => (
        <div key={listItem.key} className={mgcStyles.selectListLink} onClick={()=> selectManufacturer(listItem.value.manufacturerId)}>{listItem.value.manufacturerName}</div>
    ));

    useEffect(()=> {
    }, []);

    return (
        <>
        </>
    );
}

export default SampleImages;