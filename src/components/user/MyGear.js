function MyGear()
{
    return (
        <div className="ctrlNonDialog">
            <div className="header_Content">
                <span className="stdHeaderText">My Gear</span>
                <a href="#" className="anchorBtn anchorBtnGreen" id="lnkAddNewGear">Add Gear</a>
            </div>
            <br />
            <div className="ctrlCategorizedList" id="ctrlGearList"></div>

            <div className="ctrlStandardEdit marginTopBottom" id="ctrlEditGear">
                <div className="stdEditHeader marginTopBottom">
                    <span className="leftContent" id="editGearHeader_Text"></span>
                    <a href="#" className="anchorBtn anchorBtnClose rightContent" id="closeLink_EditGear"></a>
                    <br className="clearBreak" />
                </div>
                <div className="marginTopBottom" id="ctrlEditGear_Inner"></div>
            </div>
        </div>
    );
}

export default MyGear;
