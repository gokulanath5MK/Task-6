fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {

    const countriesInAsia = data.filter(country => country.region === "Asia");
    console.log("Countries in Asia:", countriesInAsia);


    const countriesWithLowPopulation = data.filter(country => country.population < 200000);
    console.log("Countries with population less than 2 lakhs:", countriesWithLowPopulation);


    data.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital);
      console.log("Flag:", country.flags.svg);
      console.log("==============================");
    });

   
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log("Total population of all countries:", totalPopulation);

    
    const countryUsingUSD = data.find(country => country.currencies.USD);
    if (countryUsingUSD) {
      console.log("Country using US Dollars as currency:", countryUsingUSD.name.common);
    } else {
      console.log("No country found using US Dollars as currency.");
    }
  })
  .catch(error => console.error("Error fetching data:", error));
