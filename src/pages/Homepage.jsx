import React, { useEffect, useState } from 'react';
import { fetchHomepageData } from '../helper/Api'
import '../style/Homepage.scss';

const Homepage = () => {
    const [homepageData, setHomepageData] = useState();
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        if (!dataLoaded) {
            fetchHomepageData().then((res) => {
                setHomepageData(res)
                console.log(res);
                setDataLoaded(true)
            })
        }
    }, [dataLoaded]);

    return (
        <div className="homepage">
            {
                homepageData &&
                <div className="homepage homepage__informations">
                    <p>{homepageData.welcome_firstline}</p>
                    <p>{homepageData.welcome_secondline}</p>
                    <p>{homepageData.welcome_thirdline}</p>
                    <p>{homepageData.welcome_fourthline}</p>
                </div>
            }

            <p className='homepage__phone'>Téléphone : {homepageData?.phone} </p>
            <img src={'assets/LPB-banniereAccueil-title.png'} className="homepage homepage__image homepage__image--title" alt="le ptit bistrot title" />
            <h3 className="homepage homepage__title homepage__title--responsive">Le p'tit bistrot</h3>
            <img src={'assets/LPB-banniereAccueil-subtitle.png'} className="homepage homepage__image homepage__image--subtitle" alt="le ptit bistrot subtitle" />
            <img src={'assets/LPB-banniereAccueil-cow.png'} className="homepage homepage__image homepage__image--cow" alt="cow" />
            <img src={'assets/LPB-banniereAccueil-bkg.jpg'} className="homepage homepage__image homepage__image--bkg" alt="background" />

        </div>
    );
}

export default Homepage;