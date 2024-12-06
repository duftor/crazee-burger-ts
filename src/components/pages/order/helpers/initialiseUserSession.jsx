import { getMenu } from "../../../../api/product"
import { getLocalStorage } from "../../../../utils/window"

const intialiseMenu = async (username, setMenu) => {
    const menuReceived = await getMenu(username)
    setMenu(menuReceived)
}

// TODO: During TS migration, declare a specific type for the stored data and use it in getLocalStorage
// Example: getLocalStorage<BasketType[]>('basketKey')
const intialiseBasket = (username, setBasket) => {
    const basketReceived = getLocalStorage(username) // localStorage est synchrone, pas besoin de "await".
    if (basketReceived) setBasket(basketReceived)
}

export const initialiseUserSession = async (username, setMenu, setBasket) => {
    await intialiseMenu(username, setMenu)
    intialiseBasket(username, setBasket)
}
