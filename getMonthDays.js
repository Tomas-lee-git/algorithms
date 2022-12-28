import isNumber from './isNumber';
const getMonthDays = (num) => {
    let month = new Date().getMonth() + 1;
    const the30DaysMonths = [4, 6, 9, 10];
    const the31DaysMonths = [1, 3, 5, 7, 8, 10, 12];
    let monthLength = 31;

    if (isNumber(num)) {
        month = num;
    } else {
        throw new TypeError('Invalid Month Number, please input number');
    }
    if (the30DaysMonths.includes(month)) {
        monthLength = 30;
    }
    if (the31DaysMonths.includes(month)) {
        monthLength = 31;
    }

    if (month === 2) {
        const year = new Date().getFullYear();
        // (四年一闰 && 百年不闰) || 四百年再闰
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 == 0) {
            monthLength = 29;
        } else {
            monthLength = 28;
        }
    }
    console.log(`这个月是${monthLength}天`);
}
