import React from "react";
import {Content} from "antd/es/layout/layout";
import Example from "./Example";
function SiteHeader(){
    return(
        <div className="site-layout-background" style={{ padding: 50, minHeight: 730}}>
            <Content className="site-layout" style={{ padding: '20px 50px'}}>
                <h1  style={{ fontSize: '50px',padding:10, marginLeft:'30%',
                    position: 'absolute',
                    textAlign: 'center',
                    height: 2,color:'black',
                    textShadow: '1px 4px 9px rgba(28, 28, 28, 0.37)'}}>
                    Гуртожитки НаУОА
                </h1>
                <Example />
                <h2 style={{position:'absolute', fontSize: '18.6px', margin: '-5% 21% ',
                    display: 'flex',textAlign: 'right',color:'black',}}>До складу студмістечка № 1 входять:</h2><br/>
                <h1 style={{ position:'absolute',fontSize: '14px', margin: '-4% 22.2% ',
                    display: 'flex',textAlign: 'right',color:'black',}}>
                     № 2 , пр. Незалежності, 41 ( кількість місць- 28)<br/>
                    № 3 пр. Незалежності, 51( кількість місць- 72)<br/>
                    № 5 пр. Незалежності, 53( кількість місць- 23)<br/>
                     № 6 пр. Незалежності, 45( кількість місць- 135)<br/>
                     - студентська їдальня пр. Незалежності,43<br/>
                     - тренажерний зал (підвал гуртожитку № 6)<br/>
                </h1>
                <h2 style={{ position:'absolute',fontSize: '18px' , margin: '-6.4% 45% ',
                    display: 'flex',textAlign: 'left',color:'black', width: '40%'}}>
                    До складу студмістечка № 2 входять:</h2><br/>
                <h1 style={{ fontSize: '14px' , margin: '-5.5% 45% ',position:'absolute',textAlign: 'left',color:'black', width: '50%'}}>
                     № 8 , пр. Незалежності, 52 ( кількість місць- 73)<br/>
                    № 9 пр. Незалежності, 62 ( кількість місць- 86)<br/>
                     № 10 пр. Незалежності, 60 ( кількість місць- 286)<br/>
                    - спорткомплекс пр. Незалежності, 54<br/>
                     - культурно-мистецький центр пр. Незалежності, 54<br/>
                </h1>
                <h2 style={{position:'absolute', fontSize: '16px' , margin: '4% 25% ',
                    display: 'flex',textAlign: 'center',color:'black', width: '40%'}}>
                   Гуртожиток «Академічний дім», пр. Незалежності, 5; ( кількість місць- 155).<br/>
                    Гуртожиток № 7, вул. Татарська, 122а ( кількість місць- 93).
            </h2>
                <img style={{margin:'-45% 3% -20% 8%' }} src={require('../img/Vector 1.png')}/>
            </Content>
        </div>
    )}
export default SiteHeader;
