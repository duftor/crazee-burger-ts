import { ID } from "../types/global"

export const deepClone = <T>(array: T[]): T[] => {
    return JSON.parse(JSON.stringify(array))
}

export const findObjectById = <T extends { id: ID }>(id: ID, array: T[]) => {
    return array.find((itemInArray) => itemInArray.id === id)
}

export const findIndexById = <T extends { id: ID }>(
    idWithUnknownIndex: ID,
    array: T[]
) => {
    return array.findIndex(
        (itemInArray) => itemInArray.id === idWithUnknownIndex
    )
}

export const removeObjectById = <T extends { id: ID }>(
    idOfItemToRemove: ID,
    array: T[]
) => {
    return array.filter((item) => item.id !== idOfItemToRemove)
}

export const isEmpty = (array: []) => {
    return array.length === 0
}
