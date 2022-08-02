export{}

//TALLEST MOUNTAIN

interface Mountain
{
    Name: string;
    Height: number;
}

let mountains: Mountain[] = 
[
    {Name: "Kilimanjaro", Height: 19341},
    {Name: "Everest", Height: 29029},
    {Name: "Denali", Height: 20310}];

function findNameOfTallestMountain(mountain:Mountain[]):string
{
    let maxValue:number = 0;
    let tallestName:string = "";
    mountain.forEach((m:Mountain) => 
    {
        if (m.Height > maxValue)
        {
            maxValue = m.Height;
            tallestName = m.Name.valueOf[maxValue];
        }        
    });  
    return tallestName;
}

let mountainName:string = (findNameOfTallestMountain(mountains));
console.log(mountainName);


//PRODUCTS

interface Product
{
    Name: string;
    Price: number;
}

let products: Product[] = 
[ 
    {Name: "Pixel 5a", Price: 400},
    {Name: "Reverend Sensei", Price: 900},
    {Name: "Deering Goodtime", Price: 800}]

    function calcAverageProductPrice(products:Product[]):number
    {
        let sum:number = 0;
        let avg:number = 0;

        products.forEach((p:Product) =>
        {
             sum += p.Price; 
        });        
        avg = sum/products.length;

        return avg;
    }

    let avgPrices:number = calcAverageProductPrice(products);
    console.log(avgPrices);


//Inventory
interface InventoryItem
{
    Product:Product;
    Quantity: number;
}

let items: InventoryItem[] = 
[ 
    {Product: {Name: "motor", Price: 10.00}, Quantity: 10},
    {Product:{Name: "sensor", Price: 12.50}, Quantity: 4},
    {Product:{Name: "LED", Price: 1.00}, Quantity: 20}
];

function calcInventoryValue(items:InventoryItem[]):number
{
    let total:number = 0;
    let grandTotal:number = 0;

    items.forEach((i:InventoryItem) =>
        {
           total =  i.Quantity * i.Product.Price;
           grandTotal += i.Quantity * i.Product.Price;           
        });   
        return grandTotal;
}

let total:number = calcInventoryValue(items);

console.log(total);