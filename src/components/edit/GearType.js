function GearType() {
    return (
        <div className="ctrlGearType">
            <table className="stdDisplayTable">
                <tr>
                    <td>Gear Type:</td>
                    <td><input type="text" className="softInput gearType_Name" size="40" maxlength="60" /></td>
                    <td>Active?</td>
                    <td><input type="checkbox" className="gearType_Active" /></td>
                    <td><a href="#" className="anchorBtn anchorBtnGreen addUpdate_GearType"></a></td>
                    <td><a href="#" className="anchorBtn anchorBtnMaroon remove_GearType"></a></td>
                </tr>
            </table>

            <hr />

            <div className="marginTopBottom innerCtrl_gearSubType">
                Sub Types:
                <span className="smallText gearType_subTypeCount" style="margin-left:5px;margin-right:5px;"></span>
                <a href="#" className="anchorBtn anchorBtnGreen addSubType">Add New SubType</a>
            </div>

            <div className="marginTopBottom dataCtrl_gearSubTypes"></div>
        </div>    
    );
}

export default GearType;