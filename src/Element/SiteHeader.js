import React from "react";
import 'antd/dist/antd.css';
import AddStudent from "../ModalOA/AddStudent";
import AddRoom from "../ModalOA/AddRoom";
import FreeSpace from "../ModalOA/FreeSpace";
/*
require('typeface-nunito');
*/

function SiteHeader(){
    return(
        <div>
            <header className='header' style={{boxShadow:'0px 4px 4px',color:'#8383835E', position: 'fixed',zIndex: 3, width: '100%',height: '70px'}}>
                <div className='logo'>
                    <img style={{width:'90%'}} src={require('../img/logofooter.png')}/>
                </div>
                <div className='logo' style={{marginLeft:'0.5%', marginTop:'0.9%'}}>
                    <h1 style={{fontSize:25,lineHeight: '16px'}} ><h1 style={{fontSize:15}}>Національний університет</h1>
                    ОСТРОЗЬКА АКАДЕМІЯ</h1>
                </div>
                    <AddRoom/>
                    <AddStudent/>
                    <FreeSpace/>
            </header>
        </div>
    )
}
export default SiteHeader;
