import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
import EditForm from "./AdminPanel/EditForm/EditForm"
import HintMessage from "./AdminPanel/EditForm/HintMessage"
import AddForm from "./AdminPanel/AddForm/AddForm"
import { TabOption } from "../../../../../../types/global"

type TabConfig = {
    index: TabOption
    label: string
    Icon: JSX.Element
    Content: JSX.Element
}

export const getTabsConfig = (hasAlreadyBeenClicked?: boolean): TabConfig[] => [
    {
        index: "add",
        label: "Ajouter un produit",
        Icon: <AiOutlinePlus />,
        Content: <AddForm />,
    },
    {
        index: "edit",
        label: "Modifier un produit",
        Icon: <MdModeEditOutline />,
        Content: hasAlreadyBeenClicked ? <EditForm /> : <HintMessage />,
    },
]

export const getTabSelected = (
    tabs: TabConfig[],
    currentTabIndexSelected: TabOption
) => {
    return tabs.find((tab) => tab.index === currentTabIndexSelected)
}
