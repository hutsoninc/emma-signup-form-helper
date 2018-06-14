const fetchedContentEl = document.getElementById('fetched-content');
const inputEl = document.getElementById('input');
const outputElementsEl = document.getElementById('outputElements');
const outputActionEl = document.getElementById('outputAction');
const submitEl = document.getElementById('submit');

var request;

submitEl.addEventListener('mousedown', (el, ev) => {
    
    run();

});

inputEl.addEventListener('keypress', (el, ev) => {
    
    if(el.key.toLowerCase() == 'enter'){

        run();

    }

});

function run() {

    request = createRequest('get', inputEl.value);

    if (request){

        request.onload = function() {
    
            fetchedContentEl.innerHTML = request.response;
    
            fetchData();
    
        };
    
        request.send();
    
    }else {
        console.log('Error with request.');
    }

}

function createRequest(method, url) {

    var xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.setRequestHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

    return xhr;
    
}

function fetchData() {
    
    let output = [];
    let outputAction;

    const signupFormEl = document.getElementById('signup');

    let fields = signupFormEl.getElementsByClassName('field-html');

    fields = Array.prototype.slice.call(fields);

    fields.map(el => {
        output.push(el.children[0].outerHTML);
    })

    let formChildren = signupFormEl.children;

    formChildren = Array.prototype.slice.call(formChildren);

    formChildren.map(el => {
        if(el.nodeName.toLowerCase() == 'input') {
            output.push(el.outerHTML);
        }
    })

    //output = output.join('').replace(/</g,'&lt;').replace(/>/g,'&gt;<br>');
    output = output.join('').replace(/>/g,'>\n');

    outputElementsEl.value = output;

    outputAction = signupFormEl.action.split('/');

    outputAction.pop();

    outputActionEl.value = outputAction.join('/') + '/';

}