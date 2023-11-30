import classes from './SocialMedia.module.css';
import Arrow from '../assets/Arrow.svg'


const SocialMedia = ({data,index}) => {
    return (
        <div className={classes.main_wrapper}>
            <div className={classes.socialMedia_wrapper}>
                <div className={classes.socialMedia_icon}>
                    <img src={data.icon} alt="" />
                </div>
                <div className={classes.socialMedia_title}>{data.title}</div>
            </div>
            <div className={`${classes.dotted_arrow} ${classes[index]}`}>
                <img src={Arrow} alt="" />
            </div>
        </div>
    )
}

export default SocialMedia;