import { useCallback, useEffect, useState } from 'react';
import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import GearManufacturer from '../edit/GearManufacturer.js';
import GearManufacturerService from '../../services/gearmanufacturerservice.ts';
import dto_GearManufacturer from '../../models/dto_gearmanufacturer.ts';

function GearTypesByManufacturer({manufacturerId}) {
    const [listData, setListData] = useState([]);

    const mappedData = listData.map(listItem => (
        <ul key={listItem.key} className={mgcStyles.selectListLink}>{listItem.value.gearTypeName}</ul>
    ));

    useEffect(()=> {
        GearManufacturerService.getMany().then(response => setListData(response));
    }, []);

    return (
        <>
        {mappedData}
        </>
    );
}

export default GearTypesByManufacturer;