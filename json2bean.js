"use strict"

/**
 * 使字符驼峰化
 * @param {String} str 蛇形原文
 */
function camelize(str) {
    for (var i=0; i<str.length; i++) {
        if(str.charAt(i) == "_") {
            str = replaceAt(str, i+1, str.charAt(i+1).toUpperCase()); // 将下划线后面的字符改为大写
        }
    }
    
    str = str.replace(/_/g, ""); // 清除下划线
    return str;
}

/**
 * 替换字符串某个位置的内容
 * @param {String} str 原文
 * @param {Number} index 替换开始的位置
 * @param {String} replace 替换的内容
 */
function replaceAt(str, index, replace) {
    return str.substr(0, index) + replace + str.substr(index + replace.length);
}

/**
 * 首字母大写
 * @param {String} str 字符串
 */
function capitalize(str) {
    return str.slice(0, 1).toUpperCase() + str.substr(1);
}

const annotationSerialize = '@SerializedName(value = "{key}")';

/**
 * 输入JSON输出JavaBean类
 * @param {String} str json输入
 * @returns {String}
 */
function json2bean(str) {
    var json;
    try {
        json = JSON.parse(str);
    } catch (err) {
        return null;
        // ignore
    }
    

    var final = "";

    for(var i in json) {
        var key = i;
        var val = json[i];

        var type = capitalize(typeof(val));
        var fieldname = camelize(key);

        var line = annotationSerialize.replace("{key}", key) + "\n" + "protected " + type + " " + fieldname + ";";
        final += line + "\n\n";
    }

    return final.trim();
}
