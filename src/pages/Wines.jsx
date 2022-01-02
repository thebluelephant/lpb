import React, { useEffect, useState } from 'react';
import { fetchWines, fetchCellarDescription } from '../helper/Api';
import '../style/Wines.scss';

const Wines = () => {
    const [dataLoaded, setDataLoaded] = useState(false);
    const [wines, setWines] = useState([]);
    const [reds, setReds] = useState([]);
    const [whites, setWhites] = useState([]);
    const [roses, setRoses] = useState([]);

    const [wineList, setWineList] = useState([]);
    const [cellarDescriptions, setCellarDescriptions] = useState([]);
    const wineTypes = new Map([['red', 'rouge'], ['white', 'blanc'], ['rose', 'rosé']])

    useEffect(() => {
        if (!dataLoaded) {
            fetchCellarDescription().then((res) => {
                setCellarDescriptions(res);
            })
            fetchWines().then((res) => {
                setWines(res);
                sortWineByType();
                setDataLoaded(true);
            })

        }
    }, [wines]);

    const sortWineByType = () => {
        wines.forEach(data => {
            const wine = {
                type: data.attributes.type,
                title: data.attributes.title,
                description: data.attributes.description,
                appellation: data.attributes.appellation,
                cellarDescription: ''
            }
            switch (wine.type) {
                case 'white':
                    wine.cellarDescription = cellarDescriptions.whiteCellarDescription
                    setWhites(prevState => [...prevState, wine]);
                    break;
                case 'red':
                    wine.cellarDescription = cellarDescriptions.redCellarDescription
                    setReds(prevState => [...prevState, wine]);
                    setWineList(prevState => [...prevState, wine]);
                    break;
                case 'rose':
                    wine.cellarDescription = cellarDescriptions.roseCellarDescription
                    setRoses(prevState => [...prevState, wine]);
                    break;
                default:
                    break;
            }
        })
    }

    const cellarInformations = () => {
        return (
            <div className='cellar-informations'>
                <h3 className='cellar-informations cellar-informations__title'>Vins {wineTypes.get(wineList[0].type)}s</h3>
                <h3 className='cellar-informations cellar-informations__pitcher-title'>
                    <span className='cellar-informations__pitcher-title--capitalized '>{wineTypes.get(wineList[0].type)}s </span>
                    au pichet
                </h3>
                <p style={{ whiteSpace: "pre-line" }} className='cellar-informations cellar-informations__description'>{wineList[0].cellarDescription}</p>
                <div className='cellar-informations cellar-informations__prices'>
                    <p>2.30€ le verre</p>
                    <p>4 € le pichet de 25 cl</p>
                    <p>7 € le pichet de 50 cl</p>
                </div>
                <h3 className='cellar-informations cellar-informations__cellar-title'>Cave des {wineTypes.get(wineList[0].type)}s</h3>
            </div>)
    }

    const displayWines = (wines) => {
        return (
            wines.map(wine => {
                return (
                    <div className='wine'>
                        <p className='wine wine__title'>{wine.title}</p>
                        <p className='wine wine__description'>{wine.description}</p>
                        <p className='wine wine__appellation'>{wine.appellation}</p>
                    </div>
                )
            })
        )
    }

    const updateWineList = (type) => {
        switch (type) {
            case "red":
                setWineList([...reds]);
                break
            case "white":
                setWineList([...whites]);
                break
            case "rose":
                setWineList([...roses]);
                break
            default:
                setWineList([...reds]);
                break
        }
    }

    return (
        <div className="wines">
            <div className="wines wines__types">
                <div className='buttons'>
                    <button onClick={() => updateWineList('red')}>Rouges</button>
                    <button onClick={() => updateWineList('white')}>Blancs</button>
                    <button onClick={() => updateWineList('rose')}>Rosés</button>
                </div>
            </div>
            <div className="wines wines__container">
                {wineList.length > 0 && cellarInformations()}
                {wineList.length > 0 && displayWines(wineList)}
            </div>
        </div>
    );
}

export default Wines;