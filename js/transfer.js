function prebaci() {
    var festival = localStorage.getItem("festival");
    switch (festival) {
        case "exit":
            document.getElementById('exit').scrollIntoView();
            break;
        case "ultra":
            document.getElementById('ultra').scrollIntoView();
            break;
        case "tomorrowland":
            document.getElementById('tomorrowland').scrollIntoView();
            break;
        case "love fest":
            document.getElementById('lovefest').scrollIntoView();
            break;
        case null: break;
        default:
            alert(festival);
            break;
    }
    localStorage.removeItem("festival");
}