import { createRoot } from "react-dom/client"
import "./index.css"
import { ThemeProvider } from "styled-components"
import { theme } from "./theme"
import { RouterProvider } from "react-router-dom"
import { router } from "./routers/router"
import { OrderContextProvider } from "./context/OrderContext"

const container = document.getElementById("root")
if (!container) {
    throw new Error("Element #root not found in DOM")
}
createRoot(container).render(
    <ThemeProvider theme={theme}>
        <OrderContextProvider>
            <RouterProvider router={router} />
        </OrderContextProvider>
    </ThemeProvider>
)
