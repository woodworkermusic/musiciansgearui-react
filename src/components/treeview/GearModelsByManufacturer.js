import { useEffect, useImperativeHandle, useState } from 'react';
import { forwardRef } from 'react';
import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import GearModelService from '../../services/gearmodelservice.ts';

const GearModelsByManufacturer = forwardRef(
    ({manufacturerId, gearTypeId, expanded, cbModelClicked}, ref) => {
        const [listData, setListData] = useState([]);

        useEffect(()=> {
            if (expanded) {
                GearModelService.getByManufacturerAndType(manufacturerId, gearTypeId).then(response => setListData(response));
            }
        }, [manufacturerId, gearTypeId, expanded]);

        const selectModel = (e)=> {
            cbModelClicked(e.target.id);
            e.stopPropagation();
        }

        useImperativeHandle(ref, ()=> ({
            refreshData(manufacturerId, gearTypeId) {
                console.log('refreshing models');
                GearModelService.getByManufacturerAndType(manufacturerId, gearTypeId).then(response => setListData(response));
            }
        }));
    
        return (
            <ul style={{display: (expanded ? '' : 'none')}} className={mgcStyles.innerList}>
            {
                listData.map(listItem => (
                    <li key={listItem.key} id={listItem.value.gearModelId} className={mgcStyles.innerListLink} onClick={selectModel}>{listItem.value.modelName}</li>
                ))
            }
            </ul>
        );
    });

export default GearModelsByManufacturer;