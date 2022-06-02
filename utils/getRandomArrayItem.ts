export const getRandomArrayItem = (arr: any[]) => {
    const min = 0
    const max = arr.length - 1
    const rand = min + Math.random() * (max - min)
    const ind = Math.round(rand)
    return arr[ind]
}
