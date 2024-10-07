import * as process from 'process';

const parseArgs = () => {
    let count = 0;
    let argsArr = [];
    process.argv.slice(2).forEach(value => {
        
        if (count < 2) {
            argsArr.push(value);
            count++
        }
        if (count === 2) {
            console.log(argsArr[0].slice(2)+ ' is ' + argsArr[1])
            count = 0
            argsArr.length = 0;
        }
    });
};

parseArgs();