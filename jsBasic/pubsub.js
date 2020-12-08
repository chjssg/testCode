function observer(obj) {
    let id = 0;
    let bindinds = {};
    obj.subscribe = function (topic, func) {
        bindinds[topic] = {
            token: id++,
            func: func
        }
    };

    obj.publish = function (topic, args) {
        bindinds[topic].func(args)
    };

    return obj
}
function a(str) {
    console.log(123);
    console.log(str);
}
let sub = observer({test: 123});

sub.subscribe('chenhaojun', a);

sub.publish('chenhaojun', 'jjj');
