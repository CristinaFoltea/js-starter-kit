import "./index.css"
import numeral from "numeral";


const courseVal = numeral(1000).format('$0,0.00');
console.log(`test log from js ${courseVal}`); // eslint-disable-line no-console
