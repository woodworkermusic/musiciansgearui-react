import { useEffect, useState } from 'react';
import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import ImageService from '../../services/imageservice.ts';
import { Buffer } from 'buffer';

function SampleImages({idValues, imageType}) {
    const [listData, setListData] = useState([]);

    function convertToImage(imageData) {
        let bufferObj = Buffer.from(imageData, "base64");
        let base64String = bufferObj.toString("utf8");

        return base64String;
    }

    const mappedData = listData.map(listItem => (
        <div key={listItem.key}><img src={listItem.imageType + ',' + convertToImage(listItem.imageData)}></img></div>
    ));

    useEffect(()=> {
        // load up the images.  idValues are a list of image id values from the *parent*, such as a GearModel.
        setListData([]);
        
        for (var i = 0; i < idValues.length; i++)
        {
            ImageService.get(idValues[i], imageType)
                .then((response) => {
                    setListData([...listData, response]);
                });
         }
    }, [idValues, imageType]);

    return (
        <>
        {mappedData}
        </>
    );
}

export default SampleImages;