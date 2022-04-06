import {api} from './api/api';
import {connect} from 'react-redux';
import style from './app.module.scss';
import React, {useEffect} from 'react';
import Header from './component/header/header';
import {setQuantityCardOnPage} from './helpers/helpers';
import CardContainer from './component/cardContainer/cardContainer';
import {IAppProps, IProduct, IResolveData, IStore} from './types/types';
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
        api.getAppStateFromLocalStorage().then((stateObj: IResolveData) => {
            const activePageNumber = stateObj.activePageNumber
            activePageNumber && setActivePage(stateObj.activePageNumber)
            sortByAvailable(stateObj.isAvailableBoolean)
        })
    }, [])

    useEffect(() => {
        api.setAppStateToLocalStorage(activePage, isAvailable).then()
    }, [activePage, isAvailable])

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

    return (
        <div className={style.wrapper}>
            <header>
                <Header sortByAvailable={sortByAvailable} isAvailable={isAvailable}/>
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
