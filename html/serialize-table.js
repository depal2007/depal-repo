function serializeSelected(table){
    //var table = document.getElementsByTagName("tbody")[0];
    var header = table.parentElement.getElementsByTagName("thead")[0];
    var headerCells = header.getElementsByTagName("th");

    var fields = [];
    var checkedDataSet = {};


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
        checkedDataSet[propName] = checkedRow.children[i].textContent.trim();
    }

    var label = document.createElement("div");
    label = document.body.insertBefore(label, document.body.firstElementChild);
    label.setAttribute('style', 'white-space: pre;');
    label.textContent = "";
    label.textContent += checkedDataSet.ID + "\r\n";
    label.textContent += checkedDataSet.Status + "\r\n";
    label.textContent += checkedDataSet.Text + "\r\n";
    label.textContent += checkedDataSet.Platform + "\r\n";
    return checkedDataSet;
}
