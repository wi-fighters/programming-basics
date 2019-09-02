// boolean expression evaluation examples
// (an 'if condition' must translate to a boolean)

// if ('black' === 'bright' || 'black' === 'black') {
// translates to 
// if (false || true)
// translates to
// if (true)

const milk = false;
const sugar = true;
const temp = true;

if (milk && sugar && temp) {
    console.log('drinkin\' ma coffee');
}
