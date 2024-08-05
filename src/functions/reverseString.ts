export const reverseString = ({stringToReverse, splitPoint}: {stringToReverse: string, splitPoint?: string}) => {
    const array = stringToReverse.split("")
    const reversedArray = array.reverse()
    const joinedReversedArray = reversedArray.join("")
    return joinedReversedArray
}