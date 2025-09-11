import {
    createContext,
    Dispatch,
    MutableRefObject,
    PropsWithChildren,
    SetStateAction,
    useContext,
    useRef,
    useState,
} from "react"
import { EMPTY_PRODUCT } from "../enums/product"
import { useMenu } from "../hooks/useMenu"
import { useBasket } from "../hooks/useBasket"
import { findObjectById } from "../utils/array"
import { BasketProductQuantity, MenuProduct } from "../types/product"

type TabOptions = "add" | "edit" | "chevron"

type OrderContextType = {
    isModeAdmin: boolean
    setIsModeAdmin: Dispatch<SetStateAction<boolean>>
    isCollapsed: boolean
    setIsCollapsed: Dispatch<SetStateAction<boolean>>
    currentTabSelected: TabOptions
    setCurrentTabSelected: Dispatch<SetStateAction<TabOptions>>
    menu: MenuProduct[] | undefined
    setMenu: Dispatch<SetStateAction<MenuProduct[] | undefined>>
    handleAdd: (newProduct: MenuProduct, username: string) => void
    handleDelete: (idOfProductToDelete: string, username: string) => void
    resetMenu: (username: string) => void
    newProduct: MenuProduct
    setNewProduct: Dispatch<SetStateAction<MenuProduct>>
    productSelected: MenuProduct
    setProductSelected: Dispatch<SetStateAction<MenuProduct>>
    handleEdit: (productBeingEdited: MenuProduct, username: string) => void
    titleEditRef: MutableRefObject<HTMLInputElement | undefined>
    basket: BasketProductQuantity[]
    setBasket: Dispatch<SetStateAction<BasketProductQuantity[]>>
    handleAddToBasket: (idProductToAdd: string, username: string) => void
    handleDeleteBasketProduct: (
        idBasketProduct: string,
        username: string
    ) => void
    handleProductSelected: (idProductClicked: string) => Promise<void>
}

// 1. Création du context
const OrderContext = createContext<OrderContextType | undefined>(undefined)

// 2. Installation du context
export const OrderContextProvider = ({ children }: PropsWithChildren) => {
    const [isModeAdmin, setIsModeAdmin] = useState(false)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [currentTabSelected, setCurrentTabSelected] =
        useState<TabOptions>("add")
    const [newProduct, setNewProduct] = useState<MenuProduct>(EMPTY_PRODUCT)
    const [productSelected, setProductSelected] =
        useState<MenuProduct>(EMPTY_PRODUCT)
    const titleEditRef = useRef<HTMLInputElement>()
    const { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu } =
        useMenu()
    const { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct } =
        useBasket()

    const handleProductSelected = async (idProductClicked: string) => {
        if (!menu) return
        const productClickedOn = findObjectById<MenuProduct>(
            idProductClicked,
            menu
        )
        if (!productClickedOn) return

        await setIsCollapsed(false)
        await setCurrentTabSelected("edit")
        await setProductSelected(productClickedOn)

        titleEditRef.current?.focus()
    }

    const orderContextValue: OrderContextType = {
        isModeAdmin,
        setIsModeAdmin,
        isCollapsed,
        setIsCollapsed,
        currentTabSelected,
        setCurrentTabSelected,
        menu,
        setMenu,
        handleAdd,
        handleDelete,
        resetMenu,
        newProduct,
        setNewProduct,
        productSelected,
        setProductSelected,
        handleEdit,
        titleEditRef,
        basket,
        setBasket,
        handleAddToBasket,
        handleDeleteBasketProduct,
        handleProductSelected,
    }

    return (
        <OrderContext.Provider value={orderContextValue}>
            {children}
        </OrderContext.Provider>
    )
}

// 3. Consommation du context
export const useOrderContext = () => {
    const orderContextData = useContext(OrderContext)

    if (orderContextData === undefined) {
        throw new Error(
            "useOrderContext must be used within a OrderContextProvider"
        )
    }

    return orderContextData
}
