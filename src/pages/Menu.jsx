import React, { useEffect, useState } from 'react';
import { fetchMenu, fetchMenuPrice } from '../helper/Api';
import '../style/Menu.scss';

const Menu = () => {
    const [dataLoaded, setDataLoaded] = useState(false);
    const [menu, setMenu] = useState([]);
    const [prices, setPrices] = useState({});
    const [starters, setStarter] = useState([]);
    const [mains, setMain] = useState([]);
    const [cheeses, setCheese] = useState([]);
    const [desserts, setDessert] = useState([]);


    useEffect(() => {
        if (!dataLoaded) {
            fetchData();
        }
    }, [menu]);

    const fetchData = () => {
        fetchMenuPrice().then((res) => {
            setPrices(prevState => ({ ...prevState }, res));
        });
        fetchMenu().then((res) => {
            setMenu(prevState => ([...prevState], res));
            sortDishesByType();
            setDataLoaded(true)
        });
    }

    const sortDishesByType = () => {
        menu.forEach(data => {
            const dish = {
                type: data.attributes.type,
                title: data.attributes.title,
                subtitle: data.attributes.subtitle
            }
            switch (dish.type) {
                case 'starter':
                    setStarter(prevState => [...prevState, dish]);
                    break;
                case 'main':
                    setMain(prevState => [...prevState, dish]);
                    break;
                case 'cheese':
                    setCheese(prevState => [...prevState, dish]);
                    break;
                case 'dessert':
                    setDessert(prevState => [...prevState, dish]);
                    break;
                default:
                    break;
            }
        })
    }

    const displayDish = (dish) => {
        return dish.map(dish => {
            return (
                <span
                    className="dish">
                    <p className="dish dish__title">{dish.title}</p>
                    <p className="dish dish__subtitle">{dish.subtitle}</p>
                </span>
            )
        })
    }

    return (
        <div className="menu">
            {
                prices &&
                <div className="menu menu__prices">
                    {
                        prices.menu_price &&
                        <span className="price">
                            <p className="price price__label">Prix du menu : </p>
                            <p>{prices.menu_price}€</p>
                        </span>
                    }
                    {
                        prices.main_price &&
                        <span className="price">
                            <p className="price price__label">Plat unique : </p>
                            <p>{prices.main_price}€</p>
                        </span>
                    }
                    {
                        prices.cheese_price &&
                        <span className="price">
                            <p className="price price__label">Fromage : </p>
                            <p>{prices.cheese_price}€</p>
                        </span>
                    }
                    {
                        prices.dessert_price &&
                        <span className="price">
                            <p className="price price__label">Dessert : </p>
                            <p>{prices.dessert_price}€</p>
                        </span>
                    }
                    <span className="separator"></span>
                </div>
            }

            {
                menu.length > 0 &&
                <div className="menu menu__container">
                    <h2>Entrées</h2>
                    {
                        starters.length > 0 && displayDish(starters)
                    }
                    <h2>Plats</h2>
                    {
                        mains.length > 0 && displayDish(mains)
                    }
                    <h2>Fromage</h2>
                    {
                        cheeses.length > 0 && displayDish(cheeses)
                    }
                    <h2>Desserts</h2>
                    {
                        desserts.length > 0 && displayDish(desserts)
                    }
                </div>
            }
        </div>
    );
}

export default Menu;