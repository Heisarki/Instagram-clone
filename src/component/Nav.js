import React,{useState, useEffect} from 'react';
import "./Nav.css";
import Chat from '../pages/Chat'

function Nav() {

    const [change, setChange] = useState(true);

    const onResize = () => {
        if (window.innerWidth <= 960) {
            setChange(true)
        }
        else {
            setChange(false)
        }
    }

    window.addEventListener('resize', onResize);

    useEffect(() => {
        onResize();
      }, []);

    return (
        <div className={change ? 'nav-m' : 'nav-d'}>
            <div className={change ? 'logo-m' : 'logo-d'}>
                <img  src="./logo/insta.png" alt=""/>
            </div>

            <div className={change ? 'search-m': 'search-d'}>
                <input type="text" placeholder="Search"></input>
            </div>
            
            <div className={change ? 'navlinks-m' : 'navlinks-d'}>
                <a href='#' className={change ? 'links-m' : 'link-d'}>
                    <img src="./logo/insta_home.png" alt="" />
                </a> 
                <a href='#' className={change ? 'links-m' : 'link-d'}>
                    <img src="./logo/insta_message.png" alt="" />
                </a> 
                <a href='#' className={change ? 'links-m' : 'link-d'}>
                    <img src="./logo/insta_explore.png" alt="" />
                </a> 
                <a href='#' className={change ? 'links-m' : 'link-d'}>
                    <img src="./logo/insta_notification.png" alt=""/>
                </a>   
                
            </div>
        </div>
    )
}

export default Nav;