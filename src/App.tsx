import {api} from './api/api';
import {connect} from 'react-redux';
import {IStore} from './redux/store';
import style from './app.module.scss';
import React, {useEffect} from 'react';
import Header from './component/header/header';
import {IAppProps, IProduct} from './types/types';
import {setQuantityCardOnPage} from './helpers/helpers';
import CardContainer from './component/cardContainer/cardContainer';
import {setActivePage, setCardOnPage, setProducts, sortByAvailable} from './redux/appReducer';


const App: React.FC<IAppProps> = ({
                                      products,
                                      cardOnPage,
                                      activePage,
                                      isAvailable,
                                      setProducts,
                                      setActivePage,
                                      setCardOnPage,
                                      sortByAvailable
                                  }: IAppProps) => {


    useEffect(() => {
        api.getProducts().then((data: Array<IProduct>) => {
            if (isAvailable) {
                const newArray: IProduct[] = data.filter(item => item.quantity_available > 0)
                setProducts(newArray)
            } else {
                setProducts(data)
            }
        })
    }, [isAvailable])

    useEffect(() => {
        window.addEventListener('resize', () => {
            setCardOnPage(setQuantityCardOnPage())
        })
        window.addEventListener('load', () => {
            setCardOnPage(setQuantityCardOnPage())
        })
        return () => {
            window.removeEventListener('resize', () => {
                setCardOnPage(setQuantityCardOnPage())
            })
            window.removeEventListener('load', () => {
                setCardOnPage(setQuantityCardOnPage())
            })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('activePage', activePage.toString())
        localStorage.setItem('isAvailable', isAvailable.toString())
    }, [activePage, isAvailable])

    useEffect(() => {
        debugger
        const activePagesString = localStorage.getItem('activePage')
        const isAvailableString = localStorage.getItem('isAvailable')
        const activePageNumber = activePagesString && parseFloat(activePagesString)
        const isAvailableBoolean = isAvailableString && isAvailableString === 'true'

        activePageNumber && setActivePage(activePageNumber)
        if (typeof isAvailableBoolean === "boolean") {
            sortByAvailable(isAvailableBoolean)
        }
    }, [])


    return (
        <div className={style.wrapper}>
            <header>
                <Header sortByAvailable={sortByAvailable}/>
            </header>
            <main>
                <CardContainer products={products} cardOnPage={cardOnPage} activePage={activePage}
                               setActivePage={setActivePage}/>
            </main>
        </div>
    );
}

const mapStateTuProps = (state: IStore) => ({
    products: state.app.products,
    cardOnPage: state.app.cardOnPage,
    activePage: state.app.activePage,
    isAvailable: state.app.isAvailable
})

const mapDispatchToProps = {
    setProducts,
    setActivePage,
    setCardOnPage,
    sortByAvailable
}

export default connect(mapStateTuProps, mapDispatchToProps)(App);
