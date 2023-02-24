function callSheetAPI(data) {
    let url = "https://script.google.com/macros/s/AKfycbyRDqIgLeSEEkO69RhlWHnRbqexWtYfVOH_aitGbHKiJXFpbABiQyeZ0ERXND6eFx3r/exec";
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // url encode form data for sending as post data
    let encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    xhr.send(encoded);
    return xhr;
}

export default callSheetAPI;