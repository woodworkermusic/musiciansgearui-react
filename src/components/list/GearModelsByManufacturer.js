import { useEffect, useState } from 'react';
import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import GearModelService from '../../services/gearmodelservice.ts';

function GearModelsByManufacturer({manufacturerId, gearTypeId, expanded}) {
    const [listData, setListData] = useState([]);

    useEffect(()=> {
        GearModelService.getByManufacturerAndType(manufacturerId, gearTypeId).then(response => setListData(response));
    }, [manufacturerId, gearTypeId]);

    const selectModel = (e)=> {
        e.stopPropagation();
    }

    return (
        <ul style={{display: (expanded ? '' : 'none')}} className={mgcStyles.innerList}>
        {
            listData.map(listItem => (
                <li key={listItem.key} id={listItem.value.gearModelId} className={mgcStyles.innerListLink} onClick={selectModel}>{listItem.value.modelName}</li>
            ))
        }
        </ul>
    );
}

export default GearModelsByManufacturer;