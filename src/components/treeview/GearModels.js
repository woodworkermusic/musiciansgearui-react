import { useEffect, useState } from 'react';
import { useRef } from 'react';

import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import GearManufacturers from './GearManufacturers.js';
import GearModel from '../edit/GearModel.js';

function GearModels() {
    const [showGearModel, setShowGearModel] = useState(false);
    const [selectedModelId, setModelId] = useState();
    const [manufacturerId, setManufacturerId] = useState();

    const mfrRef = useRef(null);

    useEffect(()=> {
    }, []);

    const selectGearModel = (gearModelId, manufacturerId)=> {
        setManufacturerId(manufacturerId);
        setModelId(gearModelId);

        if (showGearModel) {
            setShowGearModel(false);
        }
        setShowGearModel(true);
    }

    const refreshData = (manufacturerId, gearTypeId)=> {
        // console.log('mfrRef:  ' + mfrRef.current);
        // return;
        mfrRef.current.refreshModels(manufacturerId, gearTypeId);
    };

    return (
        <>
            <div className={`${mgcStyles.marginLeft} ${mgcStyles.marginDblTop}`}>
                <div className={`${mgcStyles.leftContent} ${mgcStyles.marginRight} ${mgcStyles.marginTop} ${mgcStyles.marginLeft}`}>
                    <div className={mgcStyles.pageContent}>GEAR MODELS:</div>
                    <GearManufacturers cbLoadGearModel={selectGearModel} ref={mfrRef} />
                </div>
                <div className={`${mgcStyles.leftContent}`} style={{display: showGearModel ? '' : 'none'}}>
                    { selectedModelId !== undefined ? <GearModel gearModelId={selectedModelId} manufacturerId={manufacturerId} cbRefreshData={refreshData}/> : null }
                </div>
            </div>

            <br className={mgcStyles.clearBreak} />
            <div><button onClick={()=> refreshData(1, 2)}>test refresh</button></div>
        </>
    );
}

export default GearModels;