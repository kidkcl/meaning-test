var parser = require('@yoctol/meaning');

test = '桃竹苗';
a = parser.area(test);
console.log(a);

test = ['tail', '150-200', '1991'];
b = [0, 0];
test.forEach(e => {
    let result = parser.year(e);
    if (result.value === {}) return [];
    else {
        b[0] = result.value.startYear;
        b[1] = result.value.endYear;
    }
})
console.log(b);
