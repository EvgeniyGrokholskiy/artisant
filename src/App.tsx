import React, {useState} from 'react';
import axios from 'axios';
import style from './app.module.scss';
import Header from "./component/header/header";
import {IProducts} from "./types/types";
import CardContainer from "./component/cardContainer/cardContainer";

function App() {

    const [products, setProducts] = useState<IProducts>()
    const [windowWidth, setWindowWidth] = useState(1)

    const handleGet = async () => {
        await axios.get("https://artisant.io/api/products")
            .then((response) => {
                setProducts(response.data.data)
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

export default App;
