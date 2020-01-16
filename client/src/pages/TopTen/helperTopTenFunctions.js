export function compare(a, b) {
    if (a.count > b.count) {
        return -1
    }
    if (a.count < b.count) {
        return 1
    }
    return 0
}

export const filteredArray = (competitions, buyers) => {
    let newBuyers = buyers.map(item => {
        let length = competitions.filter(comp => comp.buyer === item.id).length
        item.count = length
        return item;
    })

    newBuyers.sort(compare)
    let filterArray = []

    const push = item => {
        filterArray.push(item)
        return item
    }

    newBuyers.filter(item =>
        filterArray.some(top => top.id === item.id) ? null : push(item),
    )
    return filterArray.slice(0, 10)
}