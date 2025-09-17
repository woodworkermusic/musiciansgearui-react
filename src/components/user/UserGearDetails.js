function UserGearDetails() 
{
    return (
        <div>
            <div className="openCloseHeader ctrl_gearDetailHeader">
                <a href="#" className="openCloseLink blockLeft"></a>
                <span className="ctrlHeaderTitle blockLeft">Gear Details</span>
            </div>

            <div className="ctrl_gearDetails">
                <table className="stdDisplayTable">
                    <tr>
                        <td>Serial Number:</td>
                        <td><input type="text" className="softInput editGear_SerialNumber" size="40" maxlength="50" /></td>
                    </tr>
                    <tr>
                        <td>Model Number:</td>
                        <td><input type="text" className="softInput editGear_ModelNumber" size="40" maxlength="50" /></td>
                    </tr>
                </table>

                <table className="stdDisplayTable">
                    <tr>
                        <td>Date Acquired:</td>
                        <td><input type="date" className="softInput editGear_DateAcquired" size="12" maxlength="12" /></td>
                        <td>Original? (no mods)</td>
                        <td><input type="checkbox" className="editGear_Original" /></td>
                    </tr>
                </table>

                <table className="stdDisplayTable">
                    <tr>
                        <td>Notes:</td>
                    </tr>
                    <tr>
                        <td>
                            <textarea className="softInput editGear_Notes" rows="6" cols="60" placeholder="notes (color, modifications, damage, etc)"></textarea>
                        </td>
                    </tr>
                </table>

                <div className="marginTopBottom">
                    Images:
                    <a href="#" className="anchorBtn anchorBtnSteel editGear_AddImage">+</a>
                </div>
                <div className="marginTopBottom ctrlEditGear_Images"></div>
            </div>
        </div>
    );
}

export default UserGearDetails;
