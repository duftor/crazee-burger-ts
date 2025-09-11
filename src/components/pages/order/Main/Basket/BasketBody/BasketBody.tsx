import { isEmpty } from "../../../../../../utils/array"
import EmptyBasket from "./EmptyBasket"
import BasketProducts from "./BasketProducts"
import { useOrderContext } from "../../../../../../context/OrderContext"

export default function BasketBody() {
    const { basket, menu } = useOrderContext()

    return (
        <>
            {isEmpty(basket) ? (
                <EmptyBasket isLoading={menu === undefined} />
            ) : (
                <BasketProducts />
            )}
        </>
    )
}
