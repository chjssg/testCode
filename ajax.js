function ajax(method, url, async, data, callback) {
    var xhr = null;
    if (window.XMLHttpRequest) {  //兼容写法
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }
    xhr.withCredentials = true;
    method = method.toLocaleUpperCase(); //将传入的参数都变成大写，避免下面判断失效
    if (method == 'POST') {
        xhr.open(method, url, async);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(data);

    } else if (method == 'GET') {
        xhr.open(method, url + '?' + data, async);  //get方式下将参数拼接到url后面
        xhr.send();
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                if (callback) {
                    callback(xhr.responseText);    // 回调函数处理返回的数据
                } else {
                    alert(xhr.responseText)
                }
            }
        }
    }
}

function promiseAjax(method, url, async) {
    return new promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open(method, url, async)
        xhr.send()
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(xhr.responseText)
                }
            }
        }
    })
}


export default ajax;