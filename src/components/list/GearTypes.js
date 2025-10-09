import { useCallback, useEffect, useState } from 'react';
import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import GearType from '../edit/GearType.js';
import GearTypeService from '../../services/geartypeservice.ts';
import dto_GearType from '../../models/dto_geartype.ts';

function GearTypes() {
    const [listData, setListData] = useState([]);
    const [showEdit, setShowEdit] = useState(false);
    const [gearTypeData, setData] = useState();

    const selectGearType = useCallback((id) => {
        if (id === 0) {
            var dto = new dto_GearType();
            dto.gearTypeName = 'new';
            dto.active = true;

            setData(dto);
            setShowEdit(true);
        }
        else if (id > 0)
        {
            GearTypeService.get(id)
                .then(response => {
                    setData(response);
                    setShowEdit(true);
                })
        }
    }, []);

    const mappedData = listData.map(listItem => (
        <div key={listItem.key} className={mgcStyles.selectListLink} onClick={()=> selectGearType(listItem.value.gearTypeId)}>{listItem.value.gearTypeName}</div>
    ));

    function triggerRefresh() {
        console.log('refreshing list trois');
        GearTypeService.getMany().then(response => setListData(response));
    }

    useEffect(()=> {
        GearTypeService.getMany().then(response => setListData(response));
    }, []);

    return (
        <>
            <div className={mgcStyles.pageContent}>
                <span className={mgcStyles.marginRight}>GEAR TYPES:</span>
                <button className={`${mgcStyles.customBtn} ${mgcStyles.customBtnGreen}`} onClick={()=> selectGearType(0)}>New</button>
                <div className={mgcStyles.ctrlCategorizedList}>{ mappedData }</div>
            </div>

            { 
                showEdit ? 
                <GearType data={gearTypeData} refreshData={triggerRefresh} />
                : null
            }
        </>
    );
}

export default GearTypes;