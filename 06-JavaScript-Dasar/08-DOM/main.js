let antrian = [],
    nama = "";

//ok
const elInput = document.querySelector("#nama");
const btnSubmit = document.querySelector("#btn-submit");
const elAntrian = document.querySelector("#antrian");

//event listener
btnSubmit.addEventListener("click",addList)

//function
function addList(e){
    e.preventDefault();

    if(elInput.value == ""){
        alert('Kosong!');
        return;
    }

    antrian.push({ name: elInput.value, nomor: antrian.length+1 });

    const newList = document.createElement("div");
    newList.classList.add("list");
    
    // newList.classList.toggle("completed");
    newList.innerText = antrian.length + ". " + elInput.value;

    // const completedButton = document.createElement("button");
    // completedButton.innerHTML = '<i class="fas fa-check"></i>'
    // completedButton.classList.add("btn-complete");
    // newList.appendChild(completedButton);

    elAntrian.appendChild(newList);

    elInput.value = "";
}