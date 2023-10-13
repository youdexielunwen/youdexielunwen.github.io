// JavaScript Document
var code = 'OPA3';

document.getElementById("code").onclick = changeImg;

function changeImg() {
    var arrays = [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    code = ' ';
    for (var i = 0; i < 4; i++) {
        var r = Math.floor(Math.random() * arrays.length);
        code += arrays[r];
    }

    document.getElementById('code').innerHTML = code;
}

var sheng = ["辽宁省", "北京市", "山东省"];
var chengshi = [
    ["沈阳", "大连", "鞍山", "葫芦岛"],
    ["顺义区", "海淀区", "密云区", "朝阳区"],
    ["青岛", "济南", "淄博", "烟台"]
];
// eslint-disable-next-line
function ff() {
    var ele = document.getElementById("sel1");
// eslint-disable-next-line
	console.log(ele.options);

    for (var k = 0; k < sheng.length; k++) {
        var op1 = new Option(sheng[k], k);
        ele.options.add(op1);
    }
}
// eslint-disable-next-line
function cc() {
    var ele = document.getElementById("sel1");
    var ele2 = document.getElementById("sel2");
    var kk = ele.selectedIndex;
    kk = ele.options[kk].value;
    var arr = chengshi[kk];

    ele2.options.length = arr.length + 1;

    for (var k = 0; k < arr.length; k++) {
        var op = new Option(arr[k], kk + "" + k);
        ele2.options.add(op);
    }
}
