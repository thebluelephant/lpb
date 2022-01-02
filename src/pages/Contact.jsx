import React, { useEffect, useState } from 'react';
import Carroussel from '../components/Carroussel';
import { fetchContactPageData } from '../helper/Api';
import '../style/Contact.scss';

const Contact = () => {
    const [contactPageData, setContactpageData] = useState();
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        if (!dataLoaded) {
            fetchContactPageData().then((res) => {
                setContactpageData(res)
                setDataLoaded(true)
            })
        }
    }, [contactPageData]);

    return (
        <div className="contact">
            {
                contactPageData &&
                <>
                    <h2>{contactPageData.additionnal_information}</h2>


                    <span className='contact contact__container'>
                        <div className='carroussel'>
                            <Carroussel />
                        </div>
                        <div className='informations'>
                            <div className='item'>
                                <h3>Adresse</h3>
                                <p>{contactPageData.address}</p>
                            </div>
                            <div className='item'>
                                <h3>N° Téléphone</h3>
                                <p>{contactPageData.Phone}</p>
                            </div>
                            <div className='item'>
                                <h3>Coordonnées géographiques</h3>
                                <p>Latitude : {contactPageData.geographic_coordinates_LAT} | Longitude : {contactPageData.geographic_coordinates_LONG}</p>
                            </div>
                            <div className='item'>
                                <h3>E-mail</h3>
                                <p>{contactPageData.email}</p>
                            </div>
                        </div>

                    </span>
                </>
            }
        </div>
    );
}

export default Contact;