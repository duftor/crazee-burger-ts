export const refreshPage = () => window.location.reload()

export const setLocalStorage = <T>(key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorage = <T>(key: string): T[] | null => {
    const items = localStorage.getItem(key)

    try {
        const parsedItems = items ? JSON.parse(items) : null

        // Check that the result is an Array
        return Array.isArray(parsedItems) ? (parsedItems as T[]) : null
    } catch (error) {
        console.error("Error parsing JSON from localStorage:", error)
        return null
    }
}
