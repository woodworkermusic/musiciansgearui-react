import { useEffect, useImperativeHandle, useState } from 'react';
import { forwardRef } from 'react';

import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import ApiService from '../../services/apiservice.ts';
import ImageService from '../../services/imageservice.ts';
import { dto_GearModelImage, dto_GearTypeImage, dto_UserGearImage } from "../../models/dto_imageupload.ts";
import { Buffer } from 'buffer';

const SampleImages = forwardRef(
	({parentId, imageType}, ref) => {
		useImperativeHandle(ref, ()=> ({
			refreshImages(idList) {
				console.log('refreshing images; count:  ' + idList.length);
				setIdValues(idList);
				displayImages();
			}
		}));

		function displayImages() {
			let imgArray = [];

			for (var i = 0; i < idValues.length; i++)
			{
				ImageService.get(idValues[i], imageType)
					.then((response) => imgArray.push(response));
			}

			setListData(imgArray);
		}

		const [idValues, setIdValues] = useState([]);
		const [listData, setListData] = useState([]);
		const [selectedFile, setSelectedFile] = useState(null);

		const onFileChange = (event) => {
			setSelectedFile(event.target.files[0]);
		};

		const onFileUpload = () => {
			const fileReader = new FileReader();

			fileReader.addEventListener('load', ()=> {
				let dataResult = fileReader.result;

				let fileType = dataResult.split(',')[0];
				let dataString = dataResult.split(',')[1];

				switch (imageType) {
					case "gearmodel":
						{	
							let newImage = new dto_GearModelImage();
							newImage.CreatedBy = "system";
							newImage.GearModelId = parentId;
							newImage.ImageType = fileType;
							newImage.ImageFile = selectedFile.name;
							newImage.ImageData = ImageService.encodeDataUrl(dataString);

							ApiService.sendPost(`ImageContent/${imageType}`, newImage)
								.then((response) => {
									setIdValues(idValues => [...idValues, response.gearModelImageId]);
									displayImages();
								});
							break;
						}
					case "geartype":
						{
							let newImage = new dto_GearTypeImage();
							newImage.CreatedBy = "system";
							newImage.GearTypeId = parentId;
							newImage.ImageType = fileType;
							newImage.ImageFile = selectedFile.name;
							newImage.ImageData = ImageService.encodeDataUrl(dataString);
							ApiService.sendPost(`ImageContent/${imageType}`, newImage);
							break;
						}
					case "usergear":
						{
							let newImage = new dto_UserGearImage();
							newImage.CreatedBy = "system";
							newImage.UserGearId = parentId;
							newImage.ImageType = fileType;
							newImage.ImageFile = selectedFile.name;
							newImage.ImageData = ImageService.encodeDataUrl(dataString);
							ApiService.sendPost(`ImageContent/${imageType}`, newImage);
							break;
						}
					default: break;
				}
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
			<div key={listItem.key} className={mgcStyles.marginDblTop}><img alt='' src={listItem.value.imageType + ',' + convertToImage(listItem.value.imageData)} className={mgcStyles.sampleImage}></img></div>
		));

		useEffect(()=> {
		}, [parentId, imageType]);  

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
)

export default SampleImages;