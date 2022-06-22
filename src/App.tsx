import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {api} from './api/api'
import style from './app.module.scss'
import Header from './components/header/header'
import {getQuantityCardOnPage} from './helpers/helpers'
import CardContainer from './components/cardContainer/cardContainer'
import LostConnection from './components/lostConnection/lostConnection'
import {getActivePage, getError, getIsAvailable} from './redux/selectors'
import {getProducts, setActivePage, setCardOnPage, sortByAvailable} from './redux/appReducer'


const App: React.FC = () => {

    const dispatch = useDispatch()

    const error = useSelector(getError)
    const activePage = useSelector(getActivePage)
    const isAvailable = useSelector(getIsAvailable)


    useEffect(() => {
            api.getAppStateFromLocalStorage().then((stateObj) => {
                if (stateObj) {
                    const {activePage, isAvailable} = stateObj
                    dispatch(setActivePage(activePage))
                    dispatch(sortByAvailable(isAvailable))
                }
            })
        }, [dispatch]
    )

    useEffect(() => {
        api.setAppStateToLocalStorage(activePage, isAvailable).then()
    }, [activePage, isAvailable])

    useEffect(() => {
        dispatch(getProducts(isAvailable))
    }, [isAvailable, dispatch])

    useEffect(() => {

        const setQuantityCardOnPage = () => {
            const quantityCardOnPage = getQuantityCardOnPage()
            dispatch(setCardOnPage(quantityCardOnPage))
        }

        window.addEventListener('resize', setQuantityCardOnPage)
        window.addEventListener('load', setQuantityCardOnPage)
        return () => {
            window.removeEventListener('resize', setQuantityCardOnPage)
            window.removeEventListener('load', setQuantityCardOnPage)
        }
    }, [dispatch])

    return (
        <div className={style.wrapper}>
            <header>
                <Header/>
            </header>
            <main>
                <CardContainer/>
                {
                    error && <LostConnection/>
                }
            </main>
        </div>
    )
}

export default React.memo(App)
