
import { Button } from '@mantine/core';
import classes from './Header.module.css';

const Header = () =>{
 

    return (
        <div className={classes.header}>
            <div className={classes.title} >SellerKin</div>
            <div className={classes.header_items}>
               <p>Home</p>
               <p>Testimonials</p>
               <p>Pricing</p>
               <p>How it works</p>
            </div>
            <div className={classes.btn}>
                <Button variant='outline'  style={{color:'rgb(249, 87, 0)',borderColor:'rgb(249, 87, 0)',borderWidth:"2px"}} >Login</Button>
                <Button style={{backgroundColor:'rgb(249, 87, 0)'}}>Get Started</Button>
            </div>
        </div>
    )
}

export default Header