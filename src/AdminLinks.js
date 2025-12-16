import { Link } from 'react-router-dom';
import mgcStyles from './css/MusiciansGearCommon.module.css';
import AuthService from './services/authservice.ts';
import { Roles } from './enums/roles.ts';

function AdminLinks({cbToggleMenu, cbSelectMenu}) {
    if (AuthService.hasRole(Roles.ADMIN)) {
        return (
            <>
            <Link className={mgcStyles.popInMenuLink} to="/gearmanufacturers" onClick={()=> cbSelectMenu('Gear Manufacturers')}>Gear Manufacturers</Link>
            <Link className={mgcStyles.popInMenuLink} to="/geartypes"  onClick={()=> cbSelectMenu('Gear Types')}>Gear Types</Link>
            <Link className={mgcStyles.popInMenuLink} to="/gearmodels" onClick={cbToggleMenu}>Gear Models</Link>
            </>
        );
    }
}

export default AdminLinks;