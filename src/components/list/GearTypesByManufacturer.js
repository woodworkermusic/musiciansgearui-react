import { useEffect, useState } from 'react';
import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import GearTypeService from '../../services/geartypeservice.ts';
import GearModelsByManufacturer from './GearModelsByManufacturer.js';

function GearTypesByManufacturer({manufacturerId, displayValue}) {
    const [listData, setListData] = useState([]);

    const mappedData = listData.map(listItem => (
        <li key={listItem.key}>
            {listItem.value.gearTypeName}
            <ul>
                <GearModelsByManufacturer manufacturerId={manufacturerId} gearTypeId={listItem.value.gearTypeId} />
            </ul>
        </li>
    ));

    useEffect(()=> {
        GearTypeService.getByManufacturer(manufacturerId).then(response => setListData(response));
        console.log('displayValue:  ' + displayValue);
    }, [manufacturerId, displayValue]);

    return (
        <>
        <ul style={{display: displayValue}}>
            {mappedData}
        </ul>
        </>
    );
}

export default GearTypesByManufacturer;