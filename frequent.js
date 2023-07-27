function findMostFrequentElement(arr) {
    const frequencyCounter = {};
    for (const element of arr) {
        if (!frequencyCounter[element]) {
            frequencyCounter[element] = 1;
        } else {
            frequencyCounter[element]++;
        }
    }
    console.log(frequencyCounter);
    let mostFrequentElement;
    let maxFrequency = 0;
    for (const element in frequencyCounter) {
        if (frequencyCounter[element] > maxFrequency) {
            mostFrequentElement = element;
            console.log(mostFrequentElement);
            maxFrequency = frequencyCounter[element];
        }
    }
    return mostFrequentElement;
}
const array = [1, 3, 2, 2, 4, 4, 4, 5, 5, 5, 5];
const result = findMostFrequentElement(array);
console.log("The most frequent element is:", result);
