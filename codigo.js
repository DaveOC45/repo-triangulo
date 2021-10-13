function triangulo() {
    let numtriangulo = document.getElementById("total").value;
    let hashtag = "";
    let res = "";
    for (let trian = 0; trian < numtriangulo; trian++) {
        hashtag += " #";
        res += "<p>" + hashtag + "</p>";
    }
    document.getElementById("res").innerHTML = res;
}