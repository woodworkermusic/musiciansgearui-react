import { useEffect, useState } from 'react';
import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import GearModelService from '../../services/gearmodelservice.ts';

function GearModelsByManufacturer({manufacturerId, gearTypeId, expanded, cbModelClicked}) {
    const [listData, setListData] = useState([]);

    const refreshData = ()=> {
        GearModelService.getByManufacturerAndType(manufacturerId, gearTypeId).then(response => setListData(response));
    }
    
    useEffect(()=> {
        if (expanded) {
            GearModelService.getByManufacturerAndType(manufacturerId, gearTypeId).then(response => setListData(response));
        }
    }, [manufacturerId, gearTypeId, expanded]);

    const selectModel = (e)=> {
        cbModelClicked(e.target.id);
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