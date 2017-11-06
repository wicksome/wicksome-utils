"use strict"

const run = (function(log) {
    const splitedLog = log.split("&");
    let params = new Map();
    
    for (const l of splitedLog) {
        const keyValue = l.split("=");
        const key = keyValue[0];
        let value = keyValue[1];
        if (/^\[.+\]$/.test(value)) {
            value = value.slice(1, -1).split(", ");
        }
        params.set(key, value);
        console.log(typeof value)
    }
    
    let paramStr = "";
    for (const key of params.keys()) {
        const value = params.get(key);
        if(Array.isArray(value)) {
            for (const el of value) {
                paramStr += (key + "=" + el);
                paramStr += "&"
            }
        } else {
            paramStr += (key + "=" + value);
            paramStr += "&"
        }
    }
    
    if(/.+&$/.test(paramStr)) {
        paramStr = paramStr.slice(0, -1);
    }
    
    console.log(params)
    console.log(paramStr);
    
    return paramStr;
})
