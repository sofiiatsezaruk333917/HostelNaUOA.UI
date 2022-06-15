import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";

export default class Example extends Component {
    state = {
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: false,
        config: config.gentle,
    };

    slides = [
        {
            key: 1,
            content: <img src={require('../img/academ_dormitory1_b.jpg')} alt="1" style={{boxShadow: '0px 0px 21px rgba(0, 0, 0, 0.4)'}} />//v
        },
        {
            key: 2,
            content: <img src={require('../img/AD.jpg')} alt="2" style={{boxShadow: '0px 0px 21px rgba(0, 0, 0, 0.4)'}}/>//m
        },
        {
            key: 3,
            content: <img src={require('../img/gurtozhytok13.jpg')} alt="3"style={{boxShadow: '0px 0px 21px rgba(0, 0, 0, 0.4)'}} />//v
        },
        {
            key: 4,
            content: <img src={require('../img/7.jpg')} alt="4"style={{boxShadow: '0px 0px 21px rgba(0, 0, 0, 0.4)'}} />//m
        },
        {
            key: 5,
            content: <img src={require('../img/academ_dormitory_b.jpg')} alt="5"style={{boxShadow: '0px 0px 21px rgba(0, 0, 0, 0.4)'}} />//v
        },
        {
            key: 6,
            content: <img src={require('../img/10.jpg')} alt="6"style={{boxShadow: '0px 0px 21px rgba(0, 0, 0, 0.4)'}} />//m
        },
        {
            key: 7,
            content: <img src={require('../img/10(2).jpg')} alt="7" style={{boxShadow: '0px 0px 21px rgba(0, 0, 0, 0.4)'}} />//v
        },
        {
            key: 8,
            content: <img src={require('../img/AD2.jpg')} alt="8" style={{boxShadow: '0px 0px 21px rgba(0, 0, 0, 0.4)'}} />//m
        }
    ].map((slide, index) => {
        return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
    });

    render() {
        return (
            <div style={{position:'page',zIndex: 1, width: "90%", height: "300px", margin:'7% 5% ' }}>
                <Carousel
                    slides={this.slides}
                    goToSlide={this.state.goToSlide}
                    offsetRadius={1000}
                    showNavigation={false}
                    animationConfig={this.state.config}
                    autoPlay={false}
                    dot={false}
                />
            </div>
        );
    }
}
