import React from "react";
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color,
            backgroundColor: color,
            height:0.2,
            width: '50%',
            marginTop:-20

        }}
    />
);
function SiteFooter(){
    return(
        <div>
            <footer className='header' style={{textAlign: 'center',boxShadow:'0px 2px 10px',color:'#8383835E',height: '110px', position: 'fixed',zIndex: 2, width: '100%' }}>
                <h1 style={{textAlign: 'left',width:'20%',marginLeft:'32.3%',marginTop:'0.5%',letterSpacing:'8px'}}>ГУРТОЖИТКИ</h1>
                <h1 style={{textAlign: 'right',width:'20%', marginLeft:'51%',marginTop:'-3.5%'}}> ОСТРОЗЬКА АКАДЕМІЯ</h1>
               <img style={{textAlign: 'center',width:'1.5%',marginTop:"-5.5%"}} src={require('../img/logofooter.png')}/>
                <ColoredLine color="black" />
                <h1 style={{fontSize: '14px',color:'black',textAlign: 'center'}}>©2022</h1>

            </footer>
        </div>
    )
}
export default SiteFooter;
