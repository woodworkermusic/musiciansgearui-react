import { useCallback, useEffect, useState } from 'react';
import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import GearManufacturer from '../edit/GearManufacturer.js';
import GearManufacturerService from '../../services/gearmanufacturerservice.ts';
import dto_GearManufacturer from '../../models/dto_gearmanufacturer.ts';

function GearManufacturers() {
    const [listData, setListData] = useState([]);
    const [showEdit, setShowEdit] = useState(false);
    const [mfrData, setData] = useState();

    const selectManufacturer = useCallback((id) => {
        if (id === 0) {
            var dto = new dto_GearManufacturer();
            dto.manufacturerName = 'new';
            dto.active = true;

            setData(dto);
            setShowEdit(true);
        }
        else if (id > 0)
        {
            GearManufacturerService.get(id)
                .then(response => {
                    setData(response);
                    setShowEdit(true);
                })
        }
    }, []);

    const mappedData = listData.map(listItem => (
        <div key={listItem.key} className={mgcStyles.selectListLink} onClick={()=> selectManufacturer(listItem.value.manufacturerId)}>{listItem.value.manufacturerName}</div>
    ));

    function triggerRefresh() {
        GearManufacturerService.getMany().then(response => setListData(response));
    };

    useEffect(()=> {
        GearManufacturerService.getMany().then(response => setListData(response));
    }, []);

    return (
        <>
            <div className={mgcStyles.pageContent}>
                <span className={mgcStyles.marginRight}>GEAR MANUFACTURERS:</span>
                <button className={`${mgcStyles.customBtn} ${mgcStyles.customBtnGreen}`} onClick={()=> selectManufacturer(0)}>New</button>
                <div className={mgcStyles.ctrlCategorizedList}>{ mappedData }</div>
            </div>

            { 
                showEdit ? 
                <GearManufacturer data={mfrData} refreshData={()=> triggerRefresh()} />
                : null
            }
        </>
    );
}

export default GearManufacturers;