// tenantId=2001&memberUsid=14503002&sort=NAME&excludeDomainGroup=true&includeSubGroupContacts=false&excludeSharedGroup=true&excludePrivateGroup=true&maxResults=500&pageIndex=1&excludePrivateContact=true&excludeDomainDl=true&searchTargets=[EMAIL, GROUP, TASK, PHONE, NAME, COMPANY_EXCLUDE_DOMAIN]&groupNos=953&domainId=500&searchOnlyDomain=true&sortDirection=ASC&language=ko_KR&excludeDomainContact=true

const log = "tenantId=2001&memberUsid=14503002&sort=NAME&excludeDomainGroup=true&includeSubGroupContacts=false&excludeSharedGroup=true&excludePrivateGroup=true&maxResults=500&pageIndex=1&excludePrivateContact=true&excludeDomainDl=true&searchTargets=[EMAIL, GROUP, TASK, PHONE, NAME, COMPANY_EXCLUDE_DOMAIN]&groupNos=953&domainId=500&searchOnlyDomain=true&sortDirection=ASC&language=ko_KR&excludeDomainContact=true";

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
