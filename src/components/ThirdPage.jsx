import SocialMedia from './SocialMedia';
import classes from './ThirdPage.module.css';
import adwords from '../assets/adwords.png'
import chat from '../assets/chat.png'
import puzzle from '../assets/puzzle.png'
import meta from '../assets/meta.png'
import quora from '../assets/quora.png'
import trending from '../assets/trending.png'
import curveline from '../assets/curveline.png'
import underline from '../assets/underline.svg'

const ThirdPage = () => {

    const dataSet =[
        {
            icon:quora,
            title:"Go to Quora and look for what people are asking",
        },
        {
            icon:meta,
            title:"Go to facebook ads library and then find out what people are running ads on"
        },
        {
            icon:adwords,
            title:"Go to google ads library and find the ads being run on different products "
        },
        {
            icon:puzzle,
            title:"Then to find out what people are commenting on ads one by one "
        },
        {
            icon:trending,
            title:"Go to google Trends and search for increasing Markets"
        },
        {
            icon:chat,
            title:"And then People can start guessing, that this could be the winning product"
        }

    ]

    return (
        <div className={classes.thirdPage_wrapper}>
            <h1 className={classes.underline_wrapper}>
                <div>The</div>
                <div className={classes.underline_text}>
                    <span>Winning Formula</span>
                    <img src={underline} alt="" />
                </div>
                <div>Revealed</div>
            </h1>
         <div className={classes.dataset_items}>
            {
                dataSet.map((data, index)=>{
                    const index_val = `index_${index}`
                    return (<SocialMedia key={index} data={data} index={index_val} />)
                }
                 
                 )
               
            }
            
         </div>
         <img className={classes.curve_image} src={curveline} alt="" />
            
        </div>
    );
}

export default ThirdPage;
