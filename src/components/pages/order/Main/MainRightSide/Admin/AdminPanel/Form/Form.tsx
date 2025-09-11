import React, {
    ChangeEventHandler,
    FocusEventHandler,
    FormEventHandler,
} from "react"
import styled from "styled-components"
import ImagePreview from "./ImagePreview"
import { Inputs } from "./Inputs"
import { MenuProduct } from "../../../../../../../../types/product"

type FormProps = {
    product: MenuProduct
    onSubmit?: FormEventHandler<HTMLFormElement>
    children: JSX.Element
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>
    onFocus?: FocusEventHandler<HTMLInputElement | HTMLSelectElement>
    onBlur?: FocusEventHandler<HTMLInputElement | HTMLSelectElement>
}

const Form = React.forwardRef<HTMLInputElement, FormProps>(
    ({ product, onSubmit, children, onChange, onFocus, onBlur }, ref) => {
        return (
            <FormStyled onSubmit={onSubmit}>
                <ImagePreview
                    imageSource={product.imageSource}
                    title={product.title}
                />
                <Inputs
                    product={product}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    ref={ref}
                />
                <div className="form-footer">{children}</div>
            </FormStyled>
        )
    }
)

export default Form

const FormStyled = styled.form`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    height: 100%;
    width: 70%;
    grid-column-gap: 20px;
    grid-row-gap: 8px;

    .form-footer {
        grid-area: 4 / -2 / -1 / -1;
        display: flex;
        align-items: center;
        position: relative;
        top: 3px;
    }
`
