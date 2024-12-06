import { useState } from "react"
import { fakeMenu } from "../fakeData/fakeMenu"
import { deepClone } from "../utils/array"
import { syncBothMenus } from "../api/product"
import { Product } from "../types/product"

export const useMenu = () => {
    const [menu, setMenu] = useState<Product[] | undefined>(undefined) // TODO: Demander à Vi si c'est pas mieux avec un if (on lance pas les fonctions pour un tableau vide => inutile)

    // comportements (gestionnaire de state ou "state handlers")
    const handleAdd = (newProduct: Product, username: string) => {
        // 1. copie du tableau
        if (menu) {
            const menuCopy = deepClone(menu)

            // 2. manip de la copie du tableau
            const menuUpdated = [newProduct, ...menuCopy]

            // 3. update du state
            setMenu(menuUpdated)
            syncBothMenus(username, menuUpdated)
        }
    }

    const handleDelete = (idOfProductToDelete: string, username: string) => {
        //1. copy du state
        if (menu) {
            const menuCopy = deepClone(menu)

            //2. manip de la copie state
            const menuUpdated = menuCopy.filter(
                (product) => product.id !== idOfProductToDelete
            )
            console.log("menuUpdated: ", menuUpdated)

            //3. update du state
            setMenu(menuUpdated)
            syncBothMenus(username, menuUpdated)
        }
    }

    const handleEdit = (productBeingEdited: Product, username: string) => {
        // 1. copie du state (deep clone)
        if (menu) {
            const menuCopy = deepClone(menu)

            // 2. manip de la copie du state
            const indexOfProductToEdit = menu.findIndex(
                (menuProduct) => menuProduct.id === productBeingEdited.id
            )
            menuCopy[indexOfProductToEdit] = productBeingEdited

            // 3. update du state
            setMenu(menuCopy)
            syncBothMenus(username, menuCopy)
        }
    }

    const resetMenu = (username: string) => {
        setMenu(fakeMenu.LARGE)
        syncBothMenus(username, fakeMenu.LARGE)
    }

    return { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu }
}
