/*Get the references for the dom elements you want to interact with*/
const regionList = document.querySelector("#region")
const countryDD = document.querySelector("#country")
const factsArea = document.querySelector("#facts-area")

// URLs that we will be using
const regionURL = 'https://restcountries.com/v3.1/region/'
const countryURL = 'https://restcountries.com/v3.1/name/'

function handleRegionChange() {
    const url = `${regionURL}${regionList.value}`
    console.log(url);
}
