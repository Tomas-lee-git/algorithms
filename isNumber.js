import isObjectLike from './isObjectLike';
import getTag from './getTag';

const isNumber = val => typeof val === 'number' || (isObjectLike(val) && getTag(val) === '[object Number]');

export default isNumber; 