export function setLocalStorage(key: string, obj: any[]): void {
    localStorage.setItem(key, JSON.stringify(obj))
}
