export const getTotalPage = (movies: number, limit: number): number => {
    return Math.ceil(movies / limit)
}
