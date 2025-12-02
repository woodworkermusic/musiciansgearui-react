import { useCallback, useEffect, useImperativeHandle, useState } from 'react';
import { createRef, forwardRef } from 'react';

import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import GearTypeService from '../../services/geartypeservice.ts';
import GearModelsByManufacturer from './GearModelsByManufacturer.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const GearTypesByManufacturer = forwardRef(
    ({expanded, manufacturerId, cbInitGearModel}, ref) => {
        useImperativeHandle(ref, ()=> ({
            refreshTypes(manufacturerId) {
                GearTypeService.getByManufacturer(manufacturerId).then(response => setListData(response));
            },

            refreshModels(manufacturerId, gearTypeId) {
                if (!expanded) return;
                console.log('refreshing; in GearTypesByManufacturer.  manufacturerId:  ' + manufacturerId + '; gearTypeId:  ' + gearTypeId);

                let modelRefObj = modelRefs.find(m => { return m.manufacturerId === parseInt(manufacturerId) && m.gearTypeId === parseInt(gearTypeId) });

                if (modelRefObj !== undefined) {
                    modelRefObj.childRef.current.refreshData(manufacturerId, gearTypeId);
                }
                else {
                    console.log('unable to find reference; manufacturerId:  ' + manufacturerId + '; gearTypeId:  ' + gearTypeId);
                    console.log('refreshing gear types');
                    refreshGearTypes();
                    toggleExpanded(gearTypeId);
                }
            }
        }));

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
                    ref={modelRefs[i].childRef} 
                    />
            </li>
        ));

        const initNewModel = (e)=> {
            cbInitGearModel(0, manufacturerId);
            e.stopPropagation();
        }

        const refreshGearTypes = useCallback((manufacturerId)=> {
            GearTypeService.getByManufacturer(manufacturerId).then(response => {
                setListData(response);

            let refData = response.map((r) => ({manufacturerId: manufacturerId, gearTypeId: r.value.gearTypeId, childRef: createRef() }));

            setModelRefs(refData);
            });
        }, []);

        useEffect(()=> {
            if (expanded) {
                refreshGearTypes(manufacturerId);
            }
        }, [expanded, manufacturerId, refreshGearTypes]);

        return (
            <ul style={{display: (expanded ? '' : 'none')}} className={mgcStyles.innerList}>
                <li className={mgcStyles.innerListLink} onClick={initNewModel}>(add new model)</li>
                {mappedData}
            </ul>
        );
    });

export default GearTypesByManufacturer;