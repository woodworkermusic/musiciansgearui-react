import { useCallback, useState } from 'react';
import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import GearManufacturer from '../edit/GearManufacturer.js';
import GearManufacturerService from '../../services/gearmanufacturerservice.ts';
import dto_GearManufacturer from '../../models/dto_gearmanufacturer.ts';

function GearManufacturers({data}) {
    const [showEdit, setShowEdit] = useState(false);
    const [manufacturerData, setManufacturerData] = useState();

    const selectManufacturer = useCallback((id) => {
        // Load the manufacturer here; then show the control.
        GearManufacturerService.get(id)
            .then((response) => { 
                setManufacturerData(response);
                setShowEdit(true);
            });
    }, []);

    const initNew = useCallback(() => {
        var dto = new dto_GearManufacturer();
        dto.manufacturerName = 'new manufacturer';
        dto.isActive = true;

        setManufacturerData(dto);
        setShowEdit(true);
    }, []);

    const mappedData = data.map(listItem => (
        <div key={listItem.key} className={mgcStyles.selectListLink} onClick={()=> selectManufacturer(listItem.value.manufacturerId)}>{listItem.value.manufacturerName}</div>
    ));

    return (
        <>
            <div className={mgcStyles.pageContent}>
                <span className={mgcStyles.marginRight}>GEAR MANUFACTURERS:</span>
                <button className={`${mgcStyles.customBtn} ${mgcStyles.customBtnGreen}`} onClick={()=> initNew()}>New</button>
                <div className={mgcStyles.ctrlCategorizedList}>{ mappedData }</div>
            </div>

            { 
                showEdit ? 
                <GearManufacturer data={manufacturerData} />
                : null
            }
        </>
    );
}

export default GearManufacturers;