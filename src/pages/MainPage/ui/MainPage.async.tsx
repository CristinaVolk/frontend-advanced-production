import {lazy} from "react"

/*export const MainPageAsync = lazy(() => new Promise(resolve => {
		setTimeout(() => resolve(import('./MainPage')), 1500)
}))*/

export const MainPageAsync = lazy(() => import('./MainPage'));