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

    return (
        <>
            <div className={mgcStyles.pageContent}>
                <span className={mgcStyles.marginRight}>GEAR MODELS:</span>
                <div className={mgcStyles.ctrlCategorizedList}>
                    { 
                        listData.map(m => 
                        {
                            const toggleGearTypes = ()=> { 
                                showGearTypes = !showGearTypes;
                                currentDisplayValue = (showGearTypes ? '' : 'none');
                                console.log('toggled; new value:  ' + currentDisplayValue);
                            }
                
                            let showGearTypes = false;
                            let currentDisplayValue = 'none';

                            return (
                                <div key={m.key}>
                                    <div className={mgcStyles.selectListLink} onClick={()=> toggleGearTypes()}>
                                        <span className={mgcStyles.marginRight}>{m.value.manufacturerName}</span>
                                        <button className={`${mgcStyles.customBtn} ${mgcStyles.customBtnGreen}`}>+</button>
                                    </div>
                                    <GearTypesByManufacturer manufacturerId={m.value.manufacturerId} displayValue={currentDisplayValue} /> 
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        </>
    );
}

export default GearModels;