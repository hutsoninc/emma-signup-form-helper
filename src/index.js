function createRequest(method, url){

    var xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.setRequestHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

    return xhr;
    
}

var request = createRequest("get", "https://signup.e2ma.net/signup/1875833/1743199/");

if (request){

    request.onload = function() {
        console.log(request)
    };
    
    request.send();

}