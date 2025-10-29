import { useState } from "react";
import ApiService from '../../services/apiservice.ts';
import mgcStyles from '../../css/MusiciansGearCommon.module.css';
import { dto_GearModelImage, dto_GearTypeImage, dto_UserGearImage } from "../../models/dto_imageupload.ts";
import ImageService from '../../services/imageservice.ts';

function UploadImage({imageType}) {
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
						newImage.GearModelId = 1;
						newImage.ImageType = fileType;
						newImage.ImageFile = selectedFile.name;
						newImage.ImageData = ImageService.encodeDataUrl(dataString);
						ApiService.sendPost(`ImageContent/${imageType}`, newImage);
						break;
					}
				case "geartype":
					{
						let newImage = new dto_GearTypeImage();
						newImage.CreatedBy = "system";
						newImage.GearTypeId = 1;
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
						newImage.UserGearId = 1;
						newImage.ImageType = fileType;
						newImage.ImageFile = selectedFile.name;
						newImage.ImageData = ImageService.encodeDataUrl(dataString);
						ApiService.sendPost(`ImageContent/${imageType}`, newImage);
						break;
					}
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
					</tbody>
                </table>
			);
		} else {
			return (
				<div>
					<br />
					<h4>Choose before Pressing the Upload button</h4>
				</div>
			);
		}
	};

	return (
		<div>
			<div>
				<input type="file" onChange={onFileChange} className={mgcStyles.softInput} />
				<button className={`${mgcStyles.customBtn} ${mgcStyles.customBtnGreen}`} onClick={onFileUpload}>Upload</button>
			</div>
			{fileData()}
		</div>
	);
};

export default UploadImage;