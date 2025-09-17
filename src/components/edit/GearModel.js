function GearModel() {
    return (
        <div>
            <table className="stdDisplayTable">
                <tr>
                    <td><a href="#" className="openCloseLink showHideDetail"></a></td>
                    <td><input type="text" className="borderlessInput gearModel_Name" size="40" maxlength="60" /></td>
                    <td className="smallText titleEquipType">(not set)<a href="#" className="anchorBtn anchorBtnSteel lookupGearType">?</a></td>
                    <td><a href="#" className="anchorBtn anchorBtnGreen addUpdate_GearModel actionLink"></a></td>
                    <td><a href="#" className="anchorBtn anchorBtnMaroon remove_GearModel actionLink"></a></td>
                </tr>
            </table>

            <div className="marginTop innerCtrl_gearModelDetail">
                <table className="stdDisplayTable">
                    <tr>
                        <td>Starting Date:</td>
                        <td><input type="date" className="softInput gearModel_StartingDate" size="10" maxlength="10" /></td>
                        <td>Ending Date:</td>
                        <td><input type="date" className="softInput gearModel_EndingDate" size="10" maxlength="10" /></td>
                    </tr>
                </table>
                <div className="marginTopBottom">
                    Sample Images:
                </div>
                <a href="#" className="anchorBtn anchorBtnGreen addSampleImage">Add Sample Image</a>
                <div className="marginTop dataCtrl_gearModel_sampleImages"></div>
            </div>
        </div>
    );
}

export default GearModel;