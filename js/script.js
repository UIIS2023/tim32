function pretraga() {
    var ime = document.getElementById('ime').value.toLowerCase();
    var drzava = document.getElementById('drzava').value.toLowerCase();
    var grad = document.getElementById('grad').value.toLowerCase();
    if ((ime == "exit" && drzava == "srbija" && grad == "novi sad")||(ime == "ultra" && drzava == "sad" && grad == "majami")) {
        document.getElementById('greska').style.display = "none";
        localStorage.setItem("festival", ime);
        window.open("elena.html","_self");
    }
    else if ((ime == "tomorrowland" || drzava == "belgija" || grad == "bum")||(ime == "love fest" && drzava == "srbija" && grad == "vrnjacka banja")) {
        document.getElementById('greska').style.display = "none";
        localStorage.setItem("festival", ime);
        window.open("luka.html","_self");
    }
    else {
        alert(ime + " " + drzava + " " + grad);
        document.getElementById('greska').style.display = "block";
    }
}