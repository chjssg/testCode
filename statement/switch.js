function switchs(ooo) {
    switch (ooo) {
        case 123:
            console.log('123');
            return 1234;
        default:
            console.log(`Sorry, we are out of ${ooo}.`);
    }
}
console.log(switchs(123));