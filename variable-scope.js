// We're not inside a function or a block.
// Whatever we declare here will be accessible from anywhere.
// It would be the same if we use var, let or const here
// (because we are not in a block, and we are not in a function)
const globalPlace = 'Earth';

// var is function-scoped. This means that
// anything you declare with var is available inside the whole function (but not outside)

// const and let are block-scoped. This means that they are only available
// inside the block where they're declared (but not outside).

// Try switching back and forth between var and const versions of this code
// to see the difference
function functionalPlace(season) {
    if (season === 'Summer') {
        // const place = 'Northern hemisphere';
        var place = 'Northern hemisphere';
    } else {
        // const place = 'Southern hemisphere';
        var place = 'Southern hemisphere';
    }
    // Test yourself: What will the value of place be
    // by the time we reach this line?
    return place;
}

console.log(globalPlace);
console.log(functionalPlace('Summer'));

// So which one should I use?

// If in doubt, choose const. If you need to reassign it, use let :)
// Both of these will keep the variable alive only within this block.

// When you see var, it keeps the variable alive within the whole function.

// When writing your own code, you can pretty much ignore var, but you should
// understand that it will behave differently when you see it in the wild
// (e.g. coding challenges when applying for jobs)
