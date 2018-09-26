function toggleBorder(e){
    if(getComputedStyle(e.target).borderStyle == "outset"){
        //alert("yes");
        e.target.style.borderStyle = "inset";
        updatePanel(e.target);
    }
    else if(getComputedStyle(e.target).borderStyle == "inset"){
        e.target.style.borderStyle = "outset";
    }
}

function updatePanel(el){
    var panel = document.querySelector(".panel");
    var panelItem = document.createElement("span");
    panelItem.classList.add("inline");
    panelItem.onclick = toggleBorder;
    panelItem.innerText = el.innerText;
    panel.appendChild(panelItem);
    panel.appendChild(document.createTextNode("; "));
}

(function(){
    var spans = document.querySelectorAll("span.inline");
    spans.forEach(e => e.onclick = toggleBorder);

})();