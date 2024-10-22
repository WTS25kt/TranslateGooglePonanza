function translateText() {
    let fromText = document.getElementById("fromText").value.trim();
    let selectTag = document.getElementById("selectTag").value.split('|');
    
    if (!fromText) return;

    let apiUrl = `https://api.mymemory.translated.net/get?q=${fromText}&langpair=${selectTag[0]}|${selectTag[1]}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById("toText").value = data.responseData.translatedText;
        })
        .catch(error => console.error('Error:', error));
}
