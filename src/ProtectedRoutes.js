import { Link } from 'react-router-dom';
import mgcStyles from './css/MusiciansGearCommon.module.css';

function ProtectedRoutes({cbToggleMenu, cbSelectMenu}) {
    return (
        <>
        <Link className={mgcStyles.popInMenuLink} to="/gearmanufacturers" onClick={()=> cbSelectMenu('Gear Manufacturers')}>Gear Manufacturers</Link>
        <Link className={mgcStyles.popInMenuLink} to="/geartypes"  onClick={()=> cbSelectMenu('Gear Types')}>Gear Types</Link>
        <Link className={mgcStyles.popInMenuLink} to="/gearmodels" onClick={cbToggleMenu}>Gear Models</Link>
        </>
    );
}

export default ProtectedRoutes;