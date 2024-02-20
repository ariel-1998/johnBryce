let regions: Country[] = []
let regeionsCounter = {}

let countryName = `country Name`;
let population = `Number Of Citizens`;
let region = `Region`;
let numberOfCountries = `Number Of Countries`

document.addEventListener(`DOMContentLoaded`,  () => {

    document.getElementById("allCountries").addEventListener(`click`, async () =>{
    
    let allCountries = await fetchAllCountries();
    printCountries(allCountries)

    })

    document.getElementById(`someCountries`).addEventListener("click", async ()=> {
        let inputVal = (document.getElementById(`search`)as HTMLInputElement).value;
        let someCountries = await fetch(`https://restcountries.com/v3.1/name/${inputVal}`).then(res => res.json());
        printCountries(someCountries)

        
    })
})





function printCountries(countries: Country[]) {

    let table = tableHead(countryName, population);
    table.classList.add(`names`)
    let table2 = tableHead(region, numberOfCountries);
    table2.classList.add(`regions`);
    
    countries.forEach(country => {
        let tr = document.createElement(`tr`);
        let countryName = document.createElement(`td`);
        let population = document.createElement(`td`);  
        let nameOfCountry = country.name.official;
        let populationAmount = country.population.toString();
        countryName.innerText = nameOfCountry;
        population.innerText = populationAmount
        tr.append(countryName, population);
        table.append(tr);     
        
        if(!regions[country.region]) {
            regions[country.region] = 1
        } else {
            regions[country.region]++
        }
        

    });

    for (const key in regeionsCounter) {
        let tr2 = document.createElement(`tr`);
        let regionName = document.createElement(`td`);
        let regionAmount = document.createElement(`td`);
        
        regionName.innerText = key
        regionAmount.innerText = regeionsCounter[key]     
        tr2.append(regionName, regionAmount)
        table2.append(tr2);     

    }
    

    let tableDiv = document.createElement(`div`);
    
    tableDiv.append(table, table2);
    document.body.append(tableDiv);
    
}




function tableHead(area: string, amount: string): HTMLTableElement {
    let table = document.createElement(`table`);
    let tr = document.createElement(`tr`);
    let tdName = document.createElement(`td`);
    let tdNumber = document.createElement(`td`);
    tdName.innerText = area;
    tdNumber.innerText =  amount;
    tr.append(tdName, tdNumber);
    table.append(tr);
    return table;
}

async function fetchAllCountries(): Promise<Country[]> {
    let countries = fetch(`https://restcountries.com/v3.1/all`).then(res => res.json());
    return countries;
}
