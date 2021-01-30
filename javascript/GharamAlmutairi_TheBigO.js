    Number.prototype.isPrime = function() {
        for( let i=2; i<this; i++ ) {
            if( this % i === 0 )    return false;
            return num > 1;
        }
    }

    const { performance } = require('perf_hooks');
    const start = performance.now();
    let primeCount = 0;
    let num = 2; 
    while( primeCount <   100000 ) {
        if( num.isPrime() ) {
            primeCount++;
        }
        num++;
    }
    console.log(`The 1,000,000th prime number is ${num-1}`);
    console.log(`This took ${performance.now() - start} milliseconds to run`);

// The 100,000th prime number is 2000001
// This took 72.67919993400574 milliseconds to run

// The 1,000,000th prime number is 2000001
// This took 436.5813000202179 milliseconds to run


//////////////////////////////////////////////////////////////////////////////////////

    // iterative
    function iFib( n ) {
        const vals = [ 0, 1 ];
        while(vals.length-1 < n) {
            let len = vals.length;
            vals.push( vals[len-1] + vals[len-2] );
        }
        return vals[n];
    }

///////////////////////////////////////////////////////////////////////////////////

const { performance } = require('perf_hooks');
const start = performance.now();

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
let newStr = ''
for (let i = story.length-1;i>=0;i--){
    newStr+=story[i];
}
console.log(`This took ${performance.now() - start} milliseconds to run`);

//This took 0.06510007381439209 milliseconds to run
