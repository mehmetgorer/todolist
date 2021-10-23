const listDOM = document.querySelector('#list');
const taskDOM = document.querySelector('#task');

let CLOSE = `<span class="close">x</span>`
let index = 0;

function newElement(){ 
    let editedTask = taskDOM.value.replace(/\s+/g, ' ').trim();
    if(editedTask != "" && editedTask.length != 0){
        const liDOM = document.createElement('li');
        liDOM.innerHTML = editedTask+CLOSE;
        listDOM.appendChild(liDOM);
        taskDOM.value = "";
        $(".success").toast("show");
        localStorage.setItem(`task${index++}`,editedTask)
        
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
              var div = this.parentElement;
              div.style.display = "none";
            };
          }
        

    }else{
        $(".error").toast("show");
    }
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

document.querySelectorAll("ul#list").forEach((item)=> {
    item.addEventListener('click', (e)=> {
        console.log(e.target.classList.toggle("checked"));
    })
});
