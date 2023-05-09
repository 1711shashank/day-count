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

    if (days.includes('Mon') && days.includes('Sun') && !days.includes('Tue')) {
        const sun = result['Sun'];
        const mon = result['Mon'];
        result['Tue'] = 2 * mon - sun;
        days = Object.keys(result);
    }

    if (days.includes('Tue') && days.includes('Mon') && !days.includes('Wed')) {
        const mon = result['Mon'];
        const tue = result['Tue'];
        result['Wed'] = 2 * tue - mon;
        days = Object.keys(result);
    }

    if (days.includes('Wed') && days.includes('Tue') && !days.includes('Thu')) {
        const tue = result['Tue'];
        const wed = result['Wed'];
        result['Thu'] = 2 * wed - tue;
        days = Object.keys(result);
    }

    if (days.includes('Thu') && days.includes('Wed') && !days.includes('Fri')) {
        const wed = result['Wed'];
        const thu = result['Thu'];
        result['Fri'] = 2 * thu - wed;
        days = Object.keys(result);
    }

    if (days.includes('Fri') && days.includes('Thu') && !days.includes('Sat')) {
        const thu = result['Thu'];
        const fri = result['Fri'];
        result['Sat'] = 2 * fri - thu;
        days = Object.keys(result);
    }


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
    '2023-05-01': 6,
    '2023-05-04': 12,
    '2023-05-05': 14,
    '2023-05-06': 2,
    '2023-05-07': 4
};



console.log(solution(testCase1));
