function idAdd(){
    var current_id = 0;
    return function (){
        return ++current_id;
    }
}

module.exports = { idAdd };