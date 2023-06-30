
function populate_grid(grid_size)
{
    const grid = document.querySelector(".grid-container");

    for (let i = 0; i < grid_size; i++)
    {
        let square = document.createElement('div'); 
        square.classList.add('grid-item');
        square.classList.add(i);
        square.addEventListener("mouseover", function (){square.style.backgroundColor="transparent"});
        grid.appendChild(square);
    }
}

populate_grid(100)

function reset()
{
    let grid_items = document.getElementsByClassName("grid-item")   
    for (let i = 0; i < grid_items.length; i++)
    {
        grid_items[i].style.backgroundColor = "#798b9c"
    }
}