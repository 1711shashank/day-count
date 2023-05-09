function generateDataForMissingDays(day1, day2, day3, result) {
    const days = Object.keys(result);

    if (days.includes(day1) && days.includes(day2) && !days.includes(day3)) {
        const data1 = result[day2];
        const data3 = result[day1];
        result[day3] = 2 * data3 - data1;
    }

    return result;
}


function solution(D) {
    const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let result = { 'Mon': 0, 'Sun': 0 };                //always given

    for (let key in D) {
        const date = new Date(key);
        const day = date.toLocaleDateString('en-US', { weekday: 'short' });
        if (!(result.hasOwnProperty(day))) {
            result[day] = 0;
        }
        result[day] += D[key];
    }


    var days = Object.keys(result);


    days = Object.keys(generateDataForMissingDays('Mon', 'Sun', 'Tue', result));
    days = Object.keys(generateDataForMissingDays('Tue', 'Mon', 'Wed', result));
    days = Object.keys(generateDataForMissingDays('Wed', 'Tue', 'Thu', result));
    days = Object.keys(generateDataForMissingDays('Thu', 'Wed', 'Fri', result));
    days = Object.keys(generateDataForMissingDays('Fir', 'Thu', 'Sat', result));

    //sort days
    result = Object.fromEntries(Object.entries(result).sort((a, b) => {
        return weekdays.indexOf(a[0]) - weekdays.indexOf(b[0]);
    }));

    return result;
}




const testCase1 = {
    '2020-01-01': 4,
    '2020-01-02': 4,
    '2020-01-03': 6,
    '2020-01-04': 8,
    '2020-01-05': 2,
    '2020-01-06': -6,
    '2020-01-07': 2,
    '2020-01-08': -2,
};
const testCase2 = {
    '2020-01-01': 6,
    '2020-01-04': 12,
    '2020-01-05': 14,
    '2020-01-06': 2,
    '2020-01-07': 4
};



console.log(solution(testCase2));
