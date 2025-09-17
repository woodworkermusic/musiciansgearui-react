function GearModelView({ modelName, startDate, endDate }) {
    return (
        <>
        <div className="marginTop innerCtrl_gearModelDetail">
            <table className="stdDisplayTable">
                <tr>
                    <td>{modelName}</td>
                    <td>Starting Date:</td>
                    <td>{startDate}</td>
                    <td>Ending Date:</td>
                    <td>{endDate}</td>
                </tr>
            </table>
            <div className="marginTopBottom">
                Sample Images:
            </div>
            <div className="marginTop dataCtrl_gearModel_sampleImages"></div>
        </div>
        </>
    );
}

export default GearModelView;