import { OptionType } from "../components/reusable-ui/SelectInput"

export const isAvailableOptions: OptionType[] = [
    { optionValue: "true", label: "En stock" },
    { optionValue: "false", label: "En rupture" },
]

export const isPublicisedOptions: OptionType[] = [
    { optionValue: "false", label: "Sans pub" },
    { optionValue: "true", label: "Avec pub" },
]
