export function isEmpty(obj: {}): boolean {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) return false
    }

    return true
}
