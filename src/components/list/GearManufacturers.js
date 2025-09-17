import { useEffect, useState } from 'react';
import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import GearManufacturerService from '../../services/gearmanufacturerservice.ts';

function GearManufacturers() {
    const[data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = ()=> {
        GearManufacturerService.getMany()
            .then((response) => {
                setData(response);
            });
    }

    return (
        <>
        {
            data.map((listItem) => {
                <div key={listItem.ManufacturerId}>{listItem.ManufacturerName}</div>
            })
        }
        </>
    );
}

export default GearManufacturers;