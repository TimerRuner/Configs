export const getTime = (time: number) => {
    const hours = Math.floor(time / 60)
    const minute = time % 60

    return `${hours}h ${minute}m`
}
