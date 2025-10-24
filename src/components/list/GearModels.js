import { useEffect, useState } from 'react';
import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import GearManufacturerService from '../../services/gearmanufacturerservice.ts';
import GearTypesByManufacturer from './GearTypesByManufacturer.js';
import GearModel from '../edit/GearModel.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

function GearModels() {
    const [listData, setListData] = useState([]);
    
    useEffect(()=> {
        GearManufacturerService.getMany().then(response => {
            let newData = response.map((r) => { r.showGearTypes = false; return r; });
            setListData(newData);
        });
    }, []);

    const [expanded, setExpanded] = useState({});

    const toggleExpanded = (childItem)=> {
        setExpanded({
            ...expanded,
            [childItem.manufacturerId] : !expanded[childItem.manufacturerId]
        });
    };

    const mappedData = listData.map(m => (
        <div key={m.key}>
            <div className={mgcStyles.selectListLink} onClick={()=> toggleExpanded(m.value)}>
                <FontAwesomeIcon className={mgcStyles.marginRight} icon={expanded[m.value.manufacturerId] ? faAngleUp :faAngleDown} />
                <span className={mgcStyles.marginRight}>{m.value.manufacturerName}</span>
            </div>
            <GearTypesByManufacturer manufacturerId={m.value.manufacturerId} expanded={expanded[m.value.manufacturerId]} /> 
        </div>
    ));

    return (
        <>
            <div className={mgcStyles.marginDblTop}>
                <div className={mgcStyles.leftContent}>
                    <span className={mgcStyles.pageContent}>GEAR MODELS:</span>
                    <div className={mgcStyles.ctrlCategorizedList}>
                        { mappedData }
                    </div>
                </div>
                <div className={mgcStyles.leftContent}>
                    <GearModel />
                </div>
            </div>


            <br className={mgcStyles.clearBreak} />
        </>
    );
}

export default GearModels;