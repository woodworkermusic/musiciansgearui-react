import { useEffect, useState } from 'react';
import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import GearManufacturerService from '../../services/gearmanufacturerservice.ts';
import GearTypesByManufacturer from './GearTypesByManufacturer.js';

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

    const mappedData = listData.map(m => 
        {
            return (
                <div key={m.key}>
                    <div className={mgcStyles.selectListLink} onClick={()=> toggleExpanded(m.value)}>
                        <span className={mgcStyles.marginRight}>{m.value.manufacturerName}</span>
                        <button className={`${mgcStyles.customBtn} ${mgcStyles.customBtnGreen}`}>+</button>
                    </div>
                    <GearTypesByManufacturer manufacturerId={m.value.manufacturerId} expanded={expanded[m.value.manufacturerId]} /> 
                </div>
            );
        });

    return (
        <>
            <div className={mgcStyles.pageContent}>
                <span className={mgcStyles.marginRight}>GEAR MODELS:</span>
                <div className={mgcStyles.ctrlCategorizedList}>
                    { mappedData }
                </div>
            </div>
        </>
    );
}

export default GearModels;