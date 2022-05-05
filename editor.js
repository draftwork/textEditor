
window.onload = function() {
    window.htmlEditor = ace.edit("html");
    htmlEditor.session.setMode("ace/mode/html");
    htmlEditor.setTheme("ace/theme/nord_dark");
    htmlEditor.session.setValue(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, 
    initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`);
    htmlEditor.setOptions({
    fontSize: "16px",
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    });
    // css editor
    window.cssEditor = ace.edit("css");
    cssEditor.session.setMode("ace/mode/html");
    cssEditor.setTheme("ace/theme/nord_dark");
    cssEditor.setOptions({
        fontSize: "14px",
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        });
    cssEditor.session.setValue(`body{
        
    }`);
    // js editor
    window.jsEditor = ace.edit("js");
    jsEditor.session.setMode("ace/mode/javascript");
    jsEditor.setTheme("ace/theme/nord_dark");
    jsEditor.session.setValue(`//JavaScript goes here`);
    jsEditor.setOptions({
        fontSize: "14px",
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
    });

}

function update() {
    var idoc = document.getElementById('virtual-iframe').contentWindow.document;
    idoc.open();
    idoc.write("<style>"+cssEditor.getValue()+"</style>" + htmlEditor.getValue() + "<script>"+jsEditor.getValue()+"</script>");
    idoc.close();
}


document.querySelector("#btn-1").addEventListener("click", function(){
    update();
});

