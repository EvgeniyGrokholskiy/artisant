import React, {useState} from 'react';
import axios from 'axios';
import style from './app.module.scss';
import Header from "./component/header/header";
import {IProduct} from "./types/types";
import CardContainer from "./component/cardContainer/cardContainer";
import {connect} from "react-redux";
import {IStore} from './redux/store';
import {
    setActivePage,
    setActivePageActionCreator,
    setCardOnPage,
    setCardOnPageActionCreator,
    setProductActionCreator,
    setProducts
} from "./redux/appReducer";

interface IAppProps {
    products: Array<IProduct>
    setProducts: setProductActionCreator
    setActivePage: setActivePageActionCreator
    setCardOnPage: setCardOnPageActionCreator
}

const App: React.FC<IAppProps> = ({products, setProducts, setCardOnPage, setActivePage}: IAppProps) => {

    /*const [products, setProducts] = useState<IProducts>()*/
    const [windowWidth, setWindowWidth] = useState(1)

    const handleGet = async () => {
        await axios.get("https://artisant.io/api/products")
            .then((response) => {
                setProducts(response.data.data.products)
            })
    }

    window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth)
    })

    const getPageSize = (width: number) => {
        if (width > 500) {
            return 4
        } else {
            return 2
        }
    }

    return (
        <div className={style.wrapper}>
            <button onClick={handleGet}>get</button>
            <header>
                <Header/>
            </header>
            <main>
                <CardContainer products={products} cardOnPage={4}/>
            </main>
        </div>
    );
}

const mapStateTuProps = (state: IStore) => ({
    products: state.app.products
})

const mapDispatchToProps = {
    setProducts,
    setActivePage,
    setCardOnPage
}

export default connect(mapStateTuProps, mapDispatchToProps)(App);
