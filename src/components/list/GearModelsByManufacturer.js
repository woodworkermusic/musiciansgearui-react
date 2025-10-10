import { useEffect, useState } from 'react';
import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import GearModelService from '../../services/gearmodelservice.ts';

function GearModelsByManufacturer({manufacturerId, gearTypeId}) {
    const [listData, setListData] = useState([]);

    const mappedData = listData.map(listItem => (
        <li key={listItem.key}>{listItem.value.modelName}</li>
    ));

    useEffect(()=> {
        GearModelService.getByManufacturerAndType(manufacturerId, gearTypeId).then(response => setListData(response));
    }, [manufacturerId, gearTypeId]);

    return (
        <>
        {mappedData}
        </>
    );
}

export default GearModelsByManufacturer;