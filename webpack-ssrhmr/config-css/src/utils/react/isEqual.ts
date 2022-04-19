//? Перевірка на рівність
function isEqual<T>(left: T) {
    return <E extends T>(right: E) => left === right
}

// const createFilterBy = (prop: string) => (id: number) =>
//     pipe(pick(prop), isEqual(id), cond)
// const filterWithId = createFilterBy("id")
// const filterWithId22 = createFilterBy("id")(22)
// const filterByValue = createFilterBy("value")

// const filteredComments = comments.filter(pipe(pick("id"), isEqual(22), cond)) // { id: 44, text: "text Two" }
