import mgcStyles from '../../css/MusiciansGearCommon.module.css';

function GearManufacturers({data}) {
    return (
        <div className={mgcStyles.pageContent}>
            GEAR MANUFACTURERS:

            <div>
                {
                    data.map((listItem) => {
                       return <div key={listItem.key} className={mgcStyles.pageContent}>{listItem.value.manufacturerName}</div>
                    })
                }
            </div>
        </div>
    );
}

export default GearManufacturers;