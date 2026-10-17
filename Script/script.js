function boardObjects(numberOfGrid)
{
    const playerScore = 0;
    return {numberOfGrid,playerScore};
}

function initializeBoard()
{
    const theContainer = document.getElementById('container');
    const gridNumbers = boardObjects(9).numberOfGrid;

    const gridContainers = () => {
       var containers = document.createElement('div');
       containers.setAttribute('class','grid-containers');
       return containers;
    }
    const gridItemsContainers = () => {
        var gridContainers = document.createElement('div');
        gridContainers.setAttribute('class','grid-items');
        return gridContainers;
    }

    const mainContainer = gridContainers();
    const itemGrid = gridItemsContainers();
    
    for(let i = 0; i < gridNumbers; i++)
    {
        const items = document.createElement('p');
        items.setAttribute('class','items');
        itemGrid.appendChild(items);
    }
    mainContainer.appendChild(itemGrid);
    theContainer.appendChild(mainContainer);
}


initializeBoard();
