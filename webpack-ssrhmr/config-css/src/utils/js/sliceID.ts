export const sliceMovie =
    (movies: any[]) =>
    (page: number, limit: number): string[] => {
        const from = page * limit - limit
        const to = page * limit
        return movies.slice(from, to)
    }
