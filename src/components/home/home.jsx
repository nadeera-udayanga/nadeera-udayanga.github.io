import React from "react";
import Data from "./Data";
import "./home.css"
import my from "../../assets/my.png"
import {TypeAnimation} from 'react-type-animation'

const Home = () => {
    return(
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div>
                        <h1>I am <span>Nadeera Udayanga</span></h1>
                        <div>
                            <span>I am a </span>
                            <TypeAnimation sequence={[
                                'Creative Designer',
                                2000,
                                'Developer',
                                2000,
                                'Photograper',
                                2000,
                                'Freelancer',
                                2000,
                            ]}
                            speed={10}
                            repeat={Infinity}
                            className="type-animation"/>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ipsam placeat deserunt ut quibusdam tempora, totam quasi aliquid neque numquam nisi, sint deleniti, at nostrum ratione doloribus voluptatem voluptatum id.</p>
                        <a href="https://www.nadeeraudayanga.com" className="button button--flex" target="_blank">Get My CV <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="file-download"><path fill="#000000" d="M20,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19l-.1,0A1.1,1.1,0,0,0,13.06,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V9S20,9,20,8.94ZM14,5.41,16.59,8H15a1,1,0,0,1-1-1ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4h5V7a3,3,0,0,0,3,3h3Zm-4.71-4.71-.29.3V12a1,1,0,0,0-2,0v2.59l-.29-.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l2-2a1,1,0,0,0-1.42-1.42Z"></path></svg></a>
                    </div>

                    <div className="home__img">
                        <img src={my} alt="" />
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Home