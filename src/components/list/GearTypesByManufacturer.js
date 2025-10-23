import { useEffect, useState } from 'react';
import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import GearTypeService from '../../services/geartypeservice.ts';
import GearModelsByManufacturer from './GearModelsByManufacturer.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

function GearTypesByManufacturer({manufacturerId, expanded}) {
    const [listData, setListData] = useState([]);
    const [expandModels, setExpanded] = useState({});

    const toggleExpanded = (childItem)=> {
        setExpanded({
            ...expandModels,
            [childItem.gearTypeId] : !expandModels[childItem.gearTypeId]
        });
    };

    const mappedData = listData.map(m => (
        <li key={m.key} onClick={()=> toggleExpanded(m.value)}>
            <span className={mgcStyles.innerListLink}>
                <FontAwesomeIcon className={mgcStyles.marginRight} icon={expandModels[m.value.gearTypeId] ? faAngleUp :faAngleDown} />
                {m.value.gearTypeName}
            </span>
            <GearModelsByManufacturer manufacturerId={manufacturerId} gearTypeId={m.value.gearTypeId} expanded={expandModels[m.value.gearTypeId]}/>
        </li>
    ));

    useEffect(()=> {
        GearTypeService.getByManufacturer(manufacturerId).then(response => setListData(response));
    }, [manufacturerId]);

    return (
        <ul style={{display: (expanded ? '' : 'none')}} className={mgcStyles.innerList}>
            <li className={mgcStyles.innerListLink}>(add new model)</li>
            {mappedData}
        </ul>
    );
}

export default GearTypesByManufacturer;