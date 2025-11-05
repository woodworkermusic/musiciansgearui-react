import { useEffect, useImperativeHandle, useState } from 'react';
import { createRef, forwardRef } from 'react';

import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import GearTypeService from '../../services/geartypeservice.ts';
import GearModelsByManufacturer from './GearModelsByManufacturer.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const GearTypesByManufacturer = forwardRef(
    ({manufacturerId, expanded, cbInitGearModel}, ref) => {
        const [listData, setListData] = useState([]);
        const [expandModels, setExpanded] = useState({});
        const [modelRefs, setModelRefs] = useState([]);

        const toggleExpanded = (i)=> {
            setExpanded({
                ...expandModels,
                [i.gearTypeId] : !expandModels[i.gearTypeId]
            });
        };

        const mappedData = listData.map((m, i) => (
            <li key={m.key} onClick={()=> toggleExpanded(m.value)}>
                <span className={mgcStyles.innerListLink}>
                    <FontAwesomeIcon className={mgcStyles.marginRight} icon={expandModels[m.value.gearTypeId] ? faAngleUp :faAngleDown} />
                    {m.value.gearTypeName}
                </span>
                <GearModelsByManufacturer 
                    manufacturerId={manufacturerId} 
                    gearTypeId={m.value.gearTypeId} 
                    expanded={expandModels[m.value.gearTypeId]} 
                    cbModelClicked={cbInitGearModel}
                    ref={modelRefs[i]} />
            </li>
        ));

        const initNewModel = (e)=> {
            cbInitGearModel(0, manufacturerId);
            e.stopPropagation();
        }

        useImperativeHandle(ref, ()=> ({
            refreshTypes(manufacturerId) {
                GearTypeService.getByManufacturer(manufacturerId).then(response => setListData(response));
            },

            refreshModels(manufacturerId, gearTypeId) {
                // let typeRef = typeRefs.find(({manufacturerId, gearTypeId}) => manufacturerId === refreshId);
                console.log('types; refreshing models');
                modelRefs[gearTypeId].current.refreshData(manufacturerId, gearTypeId);
            }
        }));

        useEffect(()=> {
            if (expanded) {
                GearTypeService.getByManufacturer(manufacturerId).then(response => {
                    setListData(response);

                let refData = response.map((r) => ({manufacturerId: r.value.manufacturerId, gearTypeId: r.value.gearTypeId, typeRef: createRef() }));
                setModelRefs(refData);
                });
            }
        }, [expanded, manufacturerId]);

        return (
            <ul style={{display: (expanded ? '' : 'none')}} className={mgcStyles.innerList}>
                <li className={mgcStyles.innerListLink} onClick={initNewModel}>(add new model)</li>
                {mappedData}
            </ul>
        );
    });

export default GearTypesByManufacturer;