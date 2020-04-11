document.getElementById("abutton").addEventListener('change', showhidemenu);

function showhidemenu(){
    const checkbox = document.querySelector("input[name=menu_checkbox]");
    const overlay = document.getElementById("menu_overlay");

        if (this.checked) {
            // Checkbox is checked
            overlay.style.display = "flex";

        } else {
            // Checkbox is not checked
            overlay.style.display = "none";
 
        }
}
function clickmenu(){
    document.getElementById('abutton').click();
}

function uncheckmenu(){
    const  menubutton = document.getElementById('abutton');
    if (menubutton.checked) {
        // Checkbox is checked
        menubutton.click();}
}