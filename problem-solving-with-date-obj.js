const findDay = (dateAsString) => {
    console.log(dateAsString);

    // get the argument into a format that Date understands + instantiate a Date object
    // TODO: if we input 12/20/2016, why does the output show 2016-12-19...etc?
    const myDate = new Date(dateAsString);
    
    // get the day as a number (0 is 'Sunday')
    const dayAsNum = myDate.getDay();

    // convert dayAsNum to dayAsString
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    console.log(days[dayAsNum]);

    const dayAsString = days[dayAsNum];

    return dayAsString;
};

// MM/DD/YYYY
findDay('12/20/2016');
// e.g. return 'Tuesday'
