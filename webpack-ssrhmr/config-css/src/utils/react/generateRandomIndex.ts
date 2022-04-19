import { assoc } from "../js/assoc"

export const generateRandomString = () =>
    Math.random().toString(36).substring(2, 15)
// nanoid - для величезних списків

// //? генерить id лише раз, тому для списків не підійде
export const assignId = assoc("id", generateRandomString())

// //? Геренерить id для списку елементів
// export const generateId = <O extends object>(obj: O) => assignId(obj)
