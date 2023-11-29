import classes from './SocialMedia.module.css';

const SocialMedia = ({data}) => {
    return (
        <div className={classes.socialMedia_wrapper}>
            <div className={classes.socialMedia_icon}>
                <img src={data.icon} alt="" />
            </div>
            <div className={classes.socialMedia_title}>{data.title}</div>
        </div>
    )
}

export default SocialMedia;