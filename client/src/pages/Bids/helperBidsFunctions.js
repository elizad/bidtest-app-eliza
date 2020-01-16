export const returnTotal = (bids) => {
    let filtered = bids.filter(item => item.accepted === true)
    let res = filtered.length!== 0 && filtered.reduce((sum, current) => { return sum + Number(current.value)}, 0)
    return res
}
export const returnTotalCapacity = (bids) => {
    let filtered =bids.filter(item => item.accepted === true)
    let res = filtered.length!== 0 && filtered.reduce((sum, current) => { return sum + Number(current.offered_capacity)}, 0)
    return res

}
