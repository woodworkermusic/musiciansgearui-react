import { useEffect, useImperativeHandle, useState } from 'react';
import { createRef, forwardRef } from 'react';
import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import GearManufacturerService from '../../services/gearmanufacturerservice.ts';
import GearTypesByManufacturer from './GearTypesByManufacturer.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

const GearManufacturers = forwardRef(
    ({cbLoadGearModel}, ref) => {
        useImperativeHandle(ref, ()=> ({
            refreshTypes(manufacturerId) {
                let typeRefObj = typeRefs.find(m => { return m.manufacturerId === manufacturerId });
                typeRefObj.childRef.current.refreshTypes(manufacturerId);
            },

            refreshModels(manufacturerId, gearTypeId) {
                console.log('refreshing; in GearManufacturers');
                console.log('manufacturerId:  ' + manufacturerId + '; gearTypeId:  ' + gearTypeId);

                let typeRefObj = typeRefs.find(m => { return m.manufacturerId === parseInt(manufacturerId) });
                typeRefObj.childRef.current.refreshModels(manufacturerId, gearTypeId);
            }
        }));

        const [treeData, setTreeData] = useState([]);
        const [expanded, setExpanded] = useState({});
        const [typeRefs, setTypeRefs] = useState([]);

        useEffect(()=> {
            GearManufacturerService.getMany().then(response => {
                let newData = response.map((r) => { r.showGearTypes = false; return r; });
                setTreeData(newData);

                let refData = response.map((r) => ({manufacturerId: r.manufacturerId, childRef: createRef() }));
                setTypeRefs(refData);
            });
        }, []);

        const toggleExpanded = (i)=> {
            setExpanded({
                ...expanded,
                [i] : !expanded[i]
            });
        };

        const mappedData = treeData.map((m, i) => 
            <div key={m.mapKey}>
                <div className={mgcStyles.selectListLink} onClick={()=> toggleExpanded(m.manufacturerId)}>
                    <FontAwesomeIcon className={mgcStyles.marginRight} icon={expanded[m.manufacturerId] ? faAngleUp :faAngleDown} />
                    <span className={mgcStyles.marginRight}>{m.manufacturerName}</span>
                </div>
                <GearTypesByManufacturer 
                    ref={typeRefs[i].childRef} 
                    manufacturerId={m.manufacturerId} 
                    expanded={expanded[m.manufacturerId]} 
                    cbInitGearModel={cbLoadGearModel} 
                    /> 
            </div>
        );

        return (
            <>
                <div className={`${mgcStyles.ctrlCategorizedList}`}>
                    { mappedData }
                </div>
            </>
        );
});

export default GearManufacturers;