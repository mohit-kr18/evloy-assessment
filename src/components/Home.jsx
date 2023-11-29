import { Button } from '@mantine/core';
import classes from './Home.module.css'
import { FaRegCirclePlay } from "react-icons/fa6";
import { GiShoppingCart } from "react-icons/gi";
import { MdCloudDone } from "react-icons/md";
import { RiFolderLockFill } from "react-icons/ri";
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import badge from '../assets/badge.png'
import task from '../assets/task.png'
import analysis from '../assets/analysis.png'
import star from '../assets/star.png'
import trophy from '../assets/trophy.png'
import attention from '../assets/attention.png'
import { AiFillSound } from "react-icons/ai";


const Home = () =>{
    return (
        <div className={classes.home_container}>
            <div className={classes.main_content}>
                <div className={classes.first_heading}>This is an invite only page...</div>
                <div className={classes.second_heading}>Golden Scaling gateway for all Ecom Businesses & Digital 
                <br/>Products Owners selling on Etsy Marketplace </div>
                <div className={classes.third_heading}>
                    Skyrocket Your Etsy Business<span><GiShoppingCart size={35} color='rgb(249, 87, 0)'/></span>By<br/> <span>Finding The<span><img className={classes.icons} src={badge} alt="" /></span>Winning Products </span>And<br/>
                    Copying Them For Your Instant Success
                </div>
            </div>
            <div className={classes.middle_content}>
                <div className={classes.video_section}>
                    <div className={classes.video_title}><AiFillSound />Watch this short video to discover the secret method</div>
                    <div className={classes.video_play}>
                    <FaRegCirclePlay color='white' size={28} />
                    </div>
                </div>
                <div className={classes.video_content_section}>
                    <div className={classes.first_video_content}>
                        <div className={classes.logos_wrapper}>
                            <img className={classes.logos}  src={analysis} alt="" />
                        </div>
                        <div> Find <span>Winning Products</span>  in less than <span>2 minutes</span>
                        </div>
                    </div>
                    <div className={classes.second_video_content}>
                        <div className={classes.logos_wrapper}>
                             <img className={classes.logos}  src={star} alt="" />
                        </div>
                        <div> Discove the <span>Rising Stars in your Niche</span>
                        </div>
                    </div>
                    <div className={classes.third_video_content}>
                        <div className={classes.logos_wrapper}>
                            <img className={classes.logos}  src={trophy} alt="" />
                        </div>
                        <div> Find the <span>Conversion Rate</span> of the Products
                        </div>
                    </div>
                    <div className={classes.fourth_video_content}>
                        <div className={classes.logos_wrapper}>
                             <img className={classes.logos}  src={attention} alt="" />
                        </div>
                        <div> Check <span>which Products</span> are getting <span>Eyeballs</span> and <span>Attention</span>
                        </div>
                     </div>
                    <div className={classes.fifth_video_content}>
                        <div className={classes.logos_wrapper}>
                            <img className={classes.logos}  src={task} alt="" />
                        </div>
                       <div><span> Analyze any listing</span> to see it's <span>performance</span>  & insider <span>hidden details</span>
                       </div> 
                     </div>   
                </div>
            </div>
            <div className={classes.last_content}>
                <p className={classes.last_content_heading}>Simple way to Reach Etsy Success in<br/> Minutes without Trial and Error</p>
                <div className={classes.bottom_btn}>
                     <FaAnglesRight size={25}/><Button  style={{backgroundColor:'rgb(249, 87, 0)',width:'20rem',height:'3rem',fontSize:'1.2rem'}}>Scale Your Etsy Business Today</Button> <FaAnglesLeft size={25} />
                </div>
                 <div className={classes.bottom_section}>
                 <p className={classes.first_bottom_content}><GiShoppingCart size={15} color='rgb(249, 87, 0)'/> Buy once, Use Forever</p>
                 <p className={classes.second_bottom_content}> <MdCloudDone size={15} color='rgb(249, 87, 0)'/> Works on Cloud</p>
                 <p className={classes.third_bottom_content}><RiFolderLockFill size={15} color='rgb(249, 87, 0)' />Unlocks Exponential Growth</p>
                 </div>
            </div>
        </div>
    )
}

export default Home;