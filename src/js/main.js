let cursor = "<span>|</span>";
let my_str = my_string.innerHTML;

function typeIt() {
    let counter = 0;
    my_string.innerHTML = cursor;
    my_string.removeAttribute("hidden");
    let i = setInterval(function () {
        my_string.innerHTML = my_str.substr(0, counter) + cursor;
        counter++;
        if (counter === my_str.length + 1) {
            clearInterval(i);
            setTimeout(typeIt, 2000)
        }
    }, 200);
}

typeIt();

// $('#download-android').click(function () {
//     location.href = "http://qudao.qingcdn.com/qing/baima_official_102.apk"
// })
//

var ua = navigator.userAgent.toLowerCase();
var isWeixin = ua.indexOf('micromessenger') !== -1;
var isQQ = ua.match(/QQ/i) == "qq"

$('#download-android').click(function () {
    
    if (isQQ || isWeixin) {
        alert('请点击右上角按钮，使用浏览器打开')
    }

        // location.href = "itms-services://?action=download-manifest&url=https://m.ubidai.io/app/ios-download-wh.plist"

        // location.href = "http://qudao.qingcdn.com/qing/baima_official_102.apk"

})





