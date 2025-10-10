import { useEffect, useState } from 'react';
import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import GearModelService from '../../services/gearmodelservice.ts';

function GearModelsByManufacturer({manufacturerId, gearTypeId}) {
    const [listData, setListData] = useState([]);

    const mappedData = listData.map(listItem => (
        <li key={listItem.key} onClick={()=> alert(listItem.value.modelName)}>{listItem.value.modelName}</li>
    ));

    useEffect(()=> {
        GearModelService.getByManufacturerAndType(manufacturerId, gearTypeId).then(response => setListData(response));
    }, [manufacturerId, gearTypeId]);

    return (
        <ul>
        {mappedData}
        </ul>
    );
}

export default GearModelsByManufacturer;