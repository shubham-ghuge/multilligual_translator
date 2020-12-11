var text_ip=document.getElementById('txt-input');
// var translateLang=document.getElementById('t_lang').value;
var text_op=document.getElementById('txt-output');
var btn_op=document.getElementById('btn-submit');
var translateLang = document.getElementById("t_lang").value;

document.getElementById('t_lang').addEventListener('change',function(){
    translateLang=this.value;
    console.log(translateLang)
    var serverUrl="https://api.funtranslations.com/translate/"+translateLang+".json";
    function urlString(txt){
        console.log(serverUrl+"?"+"text="+txt);
        return serverUrl+"?"+"text="+txt
    }
    function call_api(){
        var input_text=text_ip.value;
        console.log(input_text)
        fetch(urlString(input_text))
        .then(response=>response.json())
        .then(json => {
                var translatedTxt=json.contents.translated;
                console.log(translatedTxt)
                text_op.innerText=translatedTxt;/* op */
            })
        .catch(errorHandler)
    };
    function errorHandler(error){
        console.log("error occured", error);
        alert("something wrong with server! May be requests are excided try after 60mins")
    }
    btn_op.addEventListener("click",call_api);
});

function playAudio(url) {
    new Audio(url).play();
}