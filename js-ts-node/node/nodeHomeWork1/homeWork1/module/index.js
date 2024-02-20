let arr = [1,16,20,12]

export const printArray = array => {
    array.forEach(element => {
        console.log(element)
    });
}

export const sumArray = array => {
    let sum = 0;
    array.forEach(element => {
        sum += element
    });
    return sum;
}

export const avgArray = array => {
    let sum = sumArray(array);
    let avg = sum / array.length;
    return avg;
}

export const maxNumInArray = array => {
    let max = arr[0];
    array.forEach(element => {
        if(element > max) max = element;
    });
    return max;
}

export const minNumInArray = array => {
    let min = arr[0];
    array.forEach(element => {
        if(element < min) min = element;
    });
    return min;
}

