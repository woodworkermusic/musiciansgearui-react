function GearManufacturerView({ manufacturerName, isActive }) {
    return (
        <div className="ctrlGearManufacturer">
            <table className="stdDisplayTable">
                <tr>
                    <td>Manufacturer Name:</td>
                    <td>{manufacturerName}</td>
                    <td>Active?</td>
                    <td>{isActive}</td>
                </tr>
            </table>
        </div>
    );
}

export default GearManufacturerView;