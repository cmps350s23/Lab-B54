/*Get the references for the dom elements you want to interact with*/
const regionList = document.querySelector("#region")
const countryDD = document.querySelector("#country")
const factsArea = document.querySelector("#facts-area")

// URLs that we will be using
const regionURL = 'https://restcountries.com/v3.1/region/'
const countryURL = 'https://restcountries.com/v3.1/name/'

async function handleRegionChange() {
    const url = `${regionURL}${regionList.value}`
    // Get data from a server [API] Application programable interface
    const data = await fetch(url)
    const countries = await data.json()
    const countryOptions = countries.map(country => `<option value="${country.name.common}">${country.name.common}</option>`)

    countryDD.innerHTML = countryOptions.join(' ')
}
