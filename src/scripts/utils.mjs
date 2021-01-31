export const round = n => {
    if (n === undefined) {
        return
    } else if (n < 100) {
        return String(n);
    } else {
        const rounded = Math.round(n / 100) / Math.pow(10, 1)
        return rounded + 'k'
    }
}

export const flattenAndSort = data => {
    const res = Object.keys(data)
        .reduce((r, key) => r.concat(data[key]), [])
        .sort((a, b) =>
            (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0)
    return res
}



