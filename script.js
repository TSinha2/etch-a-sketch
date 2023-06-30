
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

populate_grid(100*100)

function reset()
{
    let grid_items = document.getElementsByClassName("grid-item")   
    for (let i = 0; i < grid_items.length; i++)
    {
        grid_items[i].style.backgroundColor = "#798b9c"
    }
}

function update()
{
    // Remove all grid-items
    let grid_container = document.getElementsByClassName("grid-container") 
    grid_container[0].innerHTML = ''

    // Width | Height
    let sliderValue = Number(document.getElementsByTagName("input")[0].value)
    let squareWidth = Math.sqrt ( (500*500) / (sliderValue * sliderValue) )

    // Generate new grid
    const grid = document.querySelector(".grid-container");
    for (let i = 0; i < sliderValue*sliderValue; i++)
    {
        let square = document.createElement('div'); 
        square.classList.add('grid-item');
        square.classList.add(i);
        square.style.width=`${squareWidth}px`
        square.style.height=`${squareWidth}px`
        square.addEventListener("mouseover", function (){square.style.backgroundColor="transparent"});
        grid.appendChild(square);
    }

}
