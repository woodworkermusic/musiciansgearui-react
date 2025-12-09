import { useCallback, useEffect, useState } from 'react';

import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import ApiService from '../../services/apiservice.ts';
import { ApiMethod } from '../../enums/apimethod.ts';
import ImageService from '../../services/imageservice.ts';
import { ImageUpload } from '../../models/imageupload.ts';

import { Buffer } from 'buffer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

function SampleImages({parentId, imageType}) {
	// const [idValues, setIdValues] = useState([]);
	const [listData, setListData] = useState([]);
	const [selectedFile, setSelectedFile] = useState(null);

	const loadImages = useCallback(()=> {
		// get the id list; then get the actual images
		ImageService.getIdList(parentId, imageType)
			.then((response) => {
				setListData([]);
				response.forEach((id)=> {
					let imgArray = [];
					let promiseArray = [];

					response.forEach((id)=> 
						promiseArray.push(ImageService.get(id, imageType).then((response) => imgArray.push(response)))
					);

					Promise.allSettled(promiseArray).then(()=> {
						setListData(imgArray);
					});
				});
			});
	}, [parentId, imageType]);

	const deleteImage = (imageId)=> {
		ImageService.delete(imageId, imageType)
			.then((response) => loadImages());
	}

	const onFileChange = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	const onFileUpload = () => {
		const fileReader = new FileReader();

		fileReader.addEventListener('load', ()=> {
			let dataResult = fileReader.result;

			let fileType = dataResult.split(',')[0];
			let dataString = dataResult.split(',')[1];

			let newImage = new ImageUpload();
			newImage.createdBy = "system";
			newImage.parentId = parentId;
			newImage.imageType = fileType;
			newImage.imageFile = selectedFile.name;
			newImage.imageData = ImageService.encodeDataUrl(dataString);

			ApiService.send(`ImageContent/${imageType}`, ApiMethod.post, newImage)
				.then((response) => {
					// setIdValues(idValues => [...idValues, response.gearModelImageId]);
					// displayImages();
				});
		});

		fileReader.readAsDataURL(selectedFile);
	};

	const fileData = () => {
		if (selectedFile) {
			return (
				<table className={mgcStyles.stdDisplayTable}>
					<tbody>
						<tr>
							<td>File Name:  {selectedFile.name}</td>
						</tr>
						<tr>
							<td>File Type:  {selectedFile.type}</td>
						</tr>
						<tr>
							<td>Last Modified:  {selectedFile.lastModifiedDate.toDateString()}</td>
						</tr>
						<tr>
							<td><button className={`${mgcStyles.customBtn} ${mgcStyles.customBtnGreen}`} onClick={onFileUpload}>Upload</button></td>
						</tr>
					</tbody>
				</table>
			);
		} else {
			return;
		}
	};

	function convertToImage(imageData) {
		let bufferObj = Buffer.from(imageData, "base64");
		let base64String = bufferObj.toString("utf8");

		return base64String;
	}

	const mappedData = listData.map(listItem => (
		<div key={listItem.key} className={mgcStyles.marginDblTop}>
			<img alt='' src={listItem.value.imageType + ',' + convertToImage(listItem.value.imageData)} className={`${mgcStyles.leftContent} ${mgcStyles.sampleImage}`}></img>
			<button className={`${mgcStyles.customBtnTrash} ${mgcStyles.leftContent} ${mgcStyles.marginLeft}`} onClick={()=> deleteImage(listItem.value.imageId)}>
				<FontAwesomeIcon icon={faTrashCan} />
			</button>
			<br className={mgcStyles.clearBreak} />
		</div>
	));

	useEffect(()=> {
		loadImages();
	}, [parentId, imageType, loadImages]);  

	return (
		<>
		<div className={`${mgcStyles.marginTopBottom} ${mgcStyles.pageContent}`}>
			Sample Images:
			<button className={`${mgcStyles.customBtn} ${mgcStyles.customBtnGreen} ${mgcStyles.marginLeft}`} onClick={()=> document.getElementById('fileUpload').click()}>+</button>
			<div>
				<input type="file" id="fileUpload" onChange={onFileChange} style={{display:'none'}} />
			</div>
			{fileData()}
		</div>
		{mappedData}
		</>
	);
}	

export default SampleImages;