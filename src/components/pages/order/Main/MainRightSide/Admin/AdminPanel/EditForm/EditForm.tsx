import { ChangeEvent, FocusEvent, useState } from "react"
import Form from "../Form/Form"
import EditInfoMessage from "./EditInfoMessage"
import SavingMessage from "./SavingMessage"
import { useSuccessMessage } from "../../../../../../../../hooks/useSuccessMessage"
import { useParams } from "react-router-dom"
import { useOrderContext } from "../../../../../../../../context/OrderContext"

export default function EditForm() {
    // state
    const { productSelected, setProductSelected, handleEdit, titleEditRef } =
        useOrderContext()

    const { username } = useParams()

    const [valueOnFocus, setvalueOnFocus] = useState("")
    const { isSubmitted: isSaved, displaySuccessMessage } = useSuccessMessage()

    // comportements (gestionnaires d'événement ou "event handlers")
    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = event.target

        const productBeingUpdated = {
            ...productSelected,
            [name]: value,
        }

        setProductSelected(productBeingUpdated) // cette ligne update le formulaire
        username && handleEdit(productBeingUpdated, username) // cette ligne update le menu
    }

    const handleOnFocus = (
        event: FocusEvent<HTMLInputElement | HTMLSelectElement, Element>
    ) => {
        const valueOnFocus = event.target.value
        setvalueOnFocus(valueOnFocus)
    }

    const handleOnBlur = (
        event: FocusEvent<HTMLInputElement | HTMLSelectElement, Element>
    ) => {
        const valueOnBlur = event.target.value
        if (valueOnFocus !== valueOnBlur) {
            console.log("ça a changé !!")
            displaySuccessMessage()
        }
    }

    // affichage
    return (
        <Form
            product={productSelected}
            onChange={handleChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            ref={titleEditRef}>
            {isSaved ? <SavingMessage /> : <EditInfoMessage />}
        </Form>
    )
}
