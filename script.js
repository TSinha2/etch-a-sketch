
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
