
const container = document.getElementById("container");
const end = document.getElementById("end");
end.addEventListener('click', restart);
end.style.backgroundColor = "gray";
const erase = document.getElementById("erase");
erase.addEventListener('click', eraseGrid);
erase.style.backgroundColor = "gray";
const marker = document.getElementById("marker");
marker.addEventListener('click', MarkGrid);
marker.style.backgroundColor = "gray";



function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) 
  {
    let cell = document.createElement("button");
    container.appendChild(cell).className = "grid-item";
  };
};

function myFunction() 
{
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


changeColor();

function eraseGrid() 
{
    console.log("erase");
    let pixels = container.querySelectorAll(".grid-item");
    pixels.forEach(pixels => pixels.removeEventListener('mouseover', MarkColor));
    pixels.forEach(pixels => pixels.addEventListener("mouseover", eraseColor));
}


function eraseColor(event) 
{
    event.target.style.backgroundColor = "white";
}


function MarkGrid() 
{
    console.log("mark");
    let pixels = container.querySelectorAll(".grid-item");
    pixels.forEach(pixels => pixels.removeEventListener('mouseover', eraseColor));
    pixels.forEach(pixels => pixels.addEventListener('mouseover', MarkColor));
}

function MarkColor(event) 
{
    console.log("mark color");
    event.target.style.backgroundColor = "brown";
}


makeRows(16, 16);

function sound(event) 
{
    let audio = new Audio("Mouse-Click-02-c-FesliyanStudios.com.mp3");
    event.Audio.play();

}

function audio() 
{
    let pixels = container.querySelectorAll(".grid-item");
    pixels.forEach(pixels => pixels.addEventListener('mouseover', sound()));
}

function changeColor() 
{
    let pixels = container.querySelectorAll(".grid-item");
    pixels.forEach(pixels => pixels.addEventListener('mouseover', colorGrid));
}

function colorGrid(event) 
{
    event.target.style.backgroundColor = "brown";
}

function restart() 
{
    location.reload();
}