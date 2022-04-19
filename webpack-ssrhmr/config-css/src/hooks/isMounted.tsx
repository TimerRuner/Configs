import React from "react"

//? Завдяки рендері компоненти з даним хуком і використанні його для взаємодії із dom, ми не впадемо на сервері, де хуки не використовуються і умова, яка там не спрацює навіть не ініціалізується
export function useIsMounted() {
    const [isMounted, setIsMounted] = React.useState(false)

    React.useEffect(() => {
        setIsMounted(true)
    }, [])

    return [isMounted]
}
