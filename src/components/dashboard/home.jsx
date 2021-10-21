// Import react 
import React from "react";

// Import Content
import {data} from "../../contents/home.js";

export default class Home extends React.Component {

    constructor(props) {
        super(props);          
    }

    render() {
        console.log(data);

        return (
            <main>
                <div className="background-drop-main">
                    <img src={require('../../../dist/img/background_main.png')}></img>
                    <div className="title">

                        <div className="main-title">
                            <h1>{data.title}</h1>
                            <div className="small-caption">
                                <h2>{data.small_caption}</h2>
                            </div>
                        </div>
                            
                        <div className="monitor-pic">
                            <img src={require('../../../dist/img/monitor.png')}></img>
                        </div>
                        <div className="button-download">
                            <button>{data.button_desc}</button>
                        </div>
                    </div>
                </div>
                <div className="product-section">
                    <div className="product-title">
                        <h2>{data.product_title[0]}</h2>
                        <h1>{data.product_title[1]}</h1>
                    </div>
                    <div className="product-features">
                        <div className="features-block">
                            <div className="features-title">
                                <div className="number"><span>1</span></div>
                                <div className="name"><span>{data.features[0]}</span></div>
                            </div>
                            <div className="caption">
                                <span>
                                    {data.features_desc[0]}
                                </span>
                            </div>
                        </div>
                        <div className="features-block">
                            <div className="features-title">
                                <div className="number"><span>2</span></div>
                                <div className="name"><span>{data.features[1]}</span></div>
                            </div>
                            <div className="caption">
                                <span>
                                    {data.features_desc[1]}
                                </span>
                            </div>
                        </div>
                        <div className="features-block">
                            <div className="features-title">
                                <div className="number"><span>3</span></div>
                                <div className="name"><span>{data.features[2]}</span></div>
                            </div>
                            <div className="caption">
                                <span>
                                    {data.features_desc[2]}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }    
}