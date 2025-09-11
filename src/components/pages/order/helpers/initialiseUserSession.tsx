import { Dispatch, SetStateAction } from "react"
import { getMenu } from "../../../../api/product"
import { getLocalStorage } from "../../../../utils/window"
import { BasketProductQuantity, MenuProduct } from "../../../../types/product"

const intialiseMenu = async (
    username: string,
    setMenu: Dispatch<SetStateAction<MenuProduct[] | undefined>>
) => {
    const menuReceived = await getMenu(username)
    setMenu(menuReceived)
}

const intialiseBasket = (
    username: string,
    setBasket: Dispatch<SetStateAction<BasketProductQuantity[]>>
) => {
    const basketReceived = getLocalStorage<BasketProductQuantity[]>(username)
    if (basketReceived) setBasket(basketReceived)
}

export const initialiseUserSession = async (
    username: string,
    setMenu: Dispatch<SetStateAction<MenuProduct[] | undefined>>,
    setBasket: Dispatch<SetStateAction<BasketProductQuantity[]>>
) => {
    await intialiseMenu(username, setMenu)
    intialiseBasket(username, setBasket)
}
