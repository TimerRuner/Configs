export const circleText = (text) => {
    const $text = document.querySelector(text)
    $text.innerHTML = $text.innerText
        .split("")
        .map(
            (cher, i) =>
                `<span style="transform: rotate(${i * 9}deg)">${cher}</span>`
        )
        .join("")
}
