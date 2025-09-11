import { DEFAULT_SUM_TO_PAY } from "../../../../../../constants/products"
import {
    BasketProductQuantity,
    MenuProduct,
} from "../../../../../../types/product"
import { findObjectById } from "../../../../../../utils/array"
import { convertStringToBoolean } from "../../../../../../utils/string"

export const calculateSumToPay = (
    basket: BasketProductQuantity[],
    menu: MenuProduct[] | undefined
) => {
    if (menu === undefined) return DEFAULT_SUM_TO_PAY

    return basket.reduce((total, basketProductQuantity) => {
        const menuProduct = findObjectById(basketProductQuantity.id, menu)

        if (menuProduct === undefined) return total

        if (isNaN(menuProduct.price)) return total

        if (convertStringToBoolean(menuProduct.isAvailable) === false)
            return total

        total += menuProduct.price * basketProductQuantity.quantity

        return total
    }, DEFAULT_SUM_TO_PAY)
}
