function clock() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('zegar').innerHTML = h + ':' + m + ':' + s;
    setTimeout(clock, 1000);
}

function checkTime(i){
    if (i < 10) {i = "0" + i};
    return i;
}

function addBox(){
    const node = document.createElement("div");
    const input = document.createElement("input");
    const textnode = document.createTextNode("Ingredient:");
    node.appendChild(textnode);
    node.appendChild(input);
    const divbr=document.createElement("div");
    divbr.innerHTML="<br>";
    document.getElementById("ingredients").appendChild(node);
    document.getElementById("ingredients").appendChild(divbr);
}

function kebabClick(){
    let num;
    if(sessionStorage.getItem("points")){
        num=parseInt(sessionStorage.getItem("points"));
    }
    else{
        sessionStorage.setItem("points",0);
        num=0;
        document.getElementById("counter").innerHTML="Kliknąłeś w kebaba 0 razy!";
    }
    num=Number(num)+Number("1");
    sessionStorage.setItem("points",num);
    document.getElementById("counter").innerHTML="Kliknąłeś w kebaba " + num + " razy!";
}
function setClickerText(){
    let num = parseInt(sessionStorage.getItem("points"));
    if(sessionStorage.getItem("points")){
    document.getElementById("counter").innerHTML="Kliknąłeś w kebaba " + num + " razy!";}
    else{
    document.getElementById("counter").innerHTML="Kliknąłeś w kebaba 0 razy!";}
}
function setClockAndClicker(){
    clock();
    setClickerText();
}

function galleryOnload(){
    clock();
    const button=document.createElement("button");
    button.setAttribute("onclick", "addBox()");
    button.setAttribute("type","button");
    button.innerHTML="Add ingredient";
    document.getElementById("ingredientButton").appendChild(button);
}