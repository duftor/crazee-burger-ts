import { MenuProduct } from "../types/product"

export const EMPTY_PRODUCT = {
    id: "",
    title: "",
    imageSource: "",
    price: 0,
    isAvailable: true,
    isPublicised: false,
} as const

export const IMAGE_COMING_SOON = "/images/coming-soon.png"
export const IMAGE_NO_STOCK = "/images/stock-epuise.png"

export const BASKET_MESSAGE = {
    EMPTY: "Votre commande est vide.",
    LOADING: "Chargement en cours...",
    NOT_AVAILABLE: "Non disponible",
} as const
