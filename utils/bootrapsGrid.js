export function bootrapGrid() {
    debugger;

    /*
    2. Create the column Object
    */
    let rows = "";

    for (let rowNumber = 1; rowNumber <= 3; rowNumber++) {
        let columns = "";

        for (let columnNumber = 1; columnNumber <= 3; columnNumber++) {
            const column = new Column(`COLUMN ${columnNumber}`);
            
            columns += column;
        }

        rows += `<div class="row">${columns}, <br><br></div>`;
    }
    
    const griSystem = `
        <div class="container">
            ${rows}
        </div >
        
    `;

    output(griSystem, "outputTag5", "<br>");
}