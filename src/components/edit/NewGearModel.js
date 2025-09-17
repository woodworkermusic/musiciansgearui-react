function NewGearModel() 
{
    return (
        <div className="ctrlGearModel marginTop" style="margin-left:25px;margin-right:25px;padding:2px 2px 2px 2px;border:1px solid #808080;">
            <div className="stdEditHeader">
                <span className="ctrlHeaderTitle leftContent">Add Gear Model</span>
                <a href="#" className="anchorBtn anchorBtnClose closeLink_addGearModel"></a>
                <br className="clearBreak" />
            </div>

            <table className="stdDisplayTable"> 
                <tr>
                    <td>Gear Type:</td>
                    <td className="titleEquipType">(not set)</td>
                    <td><a href="#" className="anchorBtn anchorBtnSteel lookupGearType">?</a></td>
                </tr>
            </table>
            <table className="stdDisplayTable">
                <tr>
                    <td>Model Name:</td>
                    <td colspan="3">
                        <input type="text" className="softInput gearModel_Name" size="40" maxlength="60" />
                        <a href="#" className="anchorBtn anchorBtnGreen addUpdate_GearModel actionLink"></a>
                    </td>
                </tr>
                <tr>
                    <td>Starting Date:</td>
                    <td><input type="date" className="softInput gearModel_StartingDate" size="10" maxlength="10" /></td>
                    <td>Ending Date:</td>
                    <td><input type="date" className="softInput gearModel_EndingDate" size="10" maxlength="10" /></td>
                </tr>
            </table>
        </div>
    );
}

export default NewGearModel;
