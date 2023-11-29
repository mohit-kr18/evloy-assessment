import classes from './SecondPage.module.css'
import { FaCircleCheck } from "react-icons/fa6";
import leftImage from '../assets/leftImage.jpg'
import rightImage from '../assets/rightImage.png'

const SecondPage = () => {
    return (
        <div className={classes.SecondPage_wrapper}>
        <div className={classes.upper_section}>
            <div className={classes.left_section}>
                <div className={classes.left_section_heading}>
                    <div className={classes.left_section_avtar}></div>
                    <p>To: All Business Owners <br /> <span>From the Desk of Amit Miglani</span></p>
                </div>
                <p>It's proven fact... Finding <span>WINNING PRODUCT</span> and <br />SELLING it is the <span> Key to Success on Etsy Marketplace</span>  </p>
                <p>However, There are <span>9.86 Million Sellers on Etsy</span> NOT <br /> everyone is successful(Too much competition) </p>
                <p>You might wonder why? Because <span>NO ONE IS <br />DOING PROPER RESEARCH</span></p>
                <div className={classes.left_section_list}>
                    <p><FaCircleCheck size={14} color='rgb(249, 87, 0)'/> You make the <span>product</span></p>
                    <p><FaCircleCheck size={14} color='rgb(249, 87, 0)' /> You <span>list</span> it down</p>
                    <p><FaCircleCheck size={14} color='rgb(249, 87, 0)'/> You do <span>SEO</span></p>
                    <p><FaCircleCheck size={14} color='rgb(249, 87, 0)'/> You do all the <span>hard work</span></p>
                </div>
                <p>And hoping that you will start receiving traction and <br /> sales only to <span>find out ZERO Sales next day</span></p>
            </div>
            <div className={classes.right_section}>
                <img src={rightImage} alt="" />
            </div>
        </div>
        <div className={classes.below_section}>
            <div className={classes.bottom_section_left}>
                <img src={leftImage} alt="" />
            </div>
            <div className={classes.bottom_section_right}>
                <p>You immediately <span>start having self doubts...Not only on <br />
                Your Products BUT on <span>Yourself</span>  as well </span></p>
                <p>Your <span>Confidence</span> also starts <span>shaking</span> </p>
                <p>You Start imaging those <span>late nights</span> when you were <br />perfecting your product</p>
                <p>Your <span>Countless tweaks </span>to get every detail just right</p>
                <p>You made this <span>amount of effort </span> just to have a <br /> <span>ZERO SALE SURPRISE</span></p>
                <p>And most importantly your hope, it gives you a blow <br />thinking <span>how others make more sales on Etsy</span></p>
                <p>Truth being told, there is a <span>Better Way </span> and let me share <br />that with you...Well here is the <span>Winning Formula</span> </p>
            </div>
        </div>
        </div>
    );
}

export default SecondPage;