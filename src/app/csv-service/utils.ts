
export function csvJsonToTable(csvJson: Array<string[]>): any {
    const table = [];
    const [headers, ...body] = csvJson;

    for (let itemArray of body) {
        let item = {};
        itemArray.reduce((_prevVal, currVal, idx): any => {
            item = {
                ...item, ...{
                    [headers[idx]]: currVal,
                }
            };
        }, '');
        table.push(item);
    }

    return table;
}