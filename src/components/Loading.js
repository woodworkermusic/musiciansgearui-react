import mgcStyles from '../css/MusiciansGearCommon.module.css';

function Loading({loadingText}) {
    return (
        <>
        <div>
            <img src={require('../Loading.gif')} alt="loading" className={mgcStyles.loadingSpinner} />
        </div>
        <div>
            {`Loading ${loadingText} - please wait`}
        </div>
        </>
    )
}

export default Loading;