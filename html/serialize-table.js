function serializeSelected(table){
    //var table = document.getElementsByTagName("tbody")[0];
    var header = table.parentElement.getElementsByTagName("thead")[0];
    var headerCells = header.getElementsByTagName("th");

    var fields = [];
    var checkedConcept = {};


    for (var i = 0; i < headerCells.length; i++) {
        var field = headerCells[i].textContent.trim();
        if (field == "") {
            field = "col_" + i;;
        }
        fields.push(field);
    }

    var checkedRow = table.querySelector("tr input:checked").parentElement.parentElement;
    for (var i = 0; i < checkedRow.childElementCount; i++) {
        var propName = fields[i];
        checkedConcept[propName] = checkedRow.children[i].textContent.trim();
    }

    if(document.querySelector("div#label"))
        document.body.removeChild(document.querySelector("div#label"));

    var label = document.createElement("div");
    label.id = "label";
    label = document.body.insertBefore(label, document.body.firstElementChild);
    label.setAttribute('style', 'white-space: pre;');
    label.textContent = "";
    label.textContent += checkedConcept.ID + "\r\n";
    label.textContent += checkedConcept.Status + "\r\n";
    label.textContent += checkedConcept.Text + "\r\n";
    label.textContent += checkedConcept.Platform + "\r\n";
    return checkedConcept;
}
