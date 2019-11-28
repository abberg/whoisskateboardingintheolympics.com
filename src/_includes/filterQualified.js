module.exports = function filterQualified(skaters, countriesData){
  const maxQualified = 20;
  const countries = {};
  const continents = {
    Europe: 0,
    Asia: 0,
    Africa: 0,
    America: 0,
    Oceania: 0
  }
  let numQualified = 0;
  
  let qualified = skaters.filter( skater => {
    if(numQualified === maxQualified){ return; }
    
    const { country } = skater;

    if(!countries[country]){
      countries[country] = 1;
      continents[getContinentByCountry(country, countriesData)]++;
      numQualified++;
      return skater;
    } else if (countries[country] < 3){
      countries[country]++;
      continents[getContinentByCountry(country, countriesData)]++;
      numQualified++;
      return skater;
    }

  });

  const continentalPlaces = [];
  for (let [continent, count] of Object.entries(continents)) {
    if(count === 0){
      const skater = skaters.find( skater => getContinentByCountry(skater.country, countriesData) === continent);
      if(skater !== undefined){
        continentalPlaces.push(skater);
      }
    }
  }

  if(continentalPlaces.length > 0){
    const endIndex = qualified.length - continentalPlaces.length;
    qualified = [].concat(qualified.slice(0, endIndex), continentalPlaces);
  }

  if(countries.JPN == 0){
    // TODO - if Japan suddenly starts sucking give them a skater
  }

  return qualified;
}

function getContinentByCountry(countryName, countriesData){
  const country = countriesData.find(ctry => ctry.name === countryName);
  if(country){
    return country.continent;
  }
}