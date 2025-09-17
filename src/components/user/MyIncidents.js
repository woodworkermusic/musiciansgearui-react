function MyIncidents()
{
    return (
        <div className="ctrlNonDialog">
            <div className="contentHeader">
                <span className="stdHeaderText">My Incidents</span>
                <a href="#" className="anchorBtn anchorBtnMaroon" id="lnkReportIncident">Report Incident</a>
            </div>
            <br />
            <div className="ctrlCategorizedList" id="ctrlIncidentList"></div>

            <div className="ctrlStandardEdit marginTopBottom" id="ctrlEditIncident">
                <div className="stdEditHeader marginTopBottom">
                    <span className="leftContent" id="editIncident_HeaderText"></span>
                    <a href="#" className="anchorBtn anchorBtnClose rightContent" id="closeLink_EditIncident"></a>
                    <br className="clearBreak" />
                </div>
                <div className="marginTopBottom" id="ctrlEditIncident_Inner"></div>
            </div>
        </div>
    );
}

export default MyIncidents;