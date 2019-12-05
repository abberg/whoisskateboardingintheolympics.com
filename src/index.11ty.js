module.exports = function({rankings, countries}){
  
  const { Card, filterQualified } = this;
  const street = rankings.find(event => event.name === 'street');
  const park = rankings.find(event => event.name === 'park');
  const mensStreet = filterQualified(street.men, countries);
  const womensStreet = filterQualified(street.women, countries);
  const mensPark = filterQualified(park.men, countries);
  const womensPark = filterQualified(park.women, countries);
  
  return (/*html*/`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Who is Skateboarding in the Olympics?</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed:600|Barlow:400,400i,600&display=swap">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/css/flag-icon.min.css">
        <link rel="stylesheet" href="styles.css">
      </head>
      <body class="wrapper">
        <header class="page-header">
          <h1>
            <img 
              src="img/skateboarding-pictogram.svg" 
              alt="Olympic Skateboarding pictogram" 
              class="pictogram"
            /> 
            Who is Skateboarding in the Olympics?
          </h1>
          <p>
            If the Olympics were held today, here's who would compete according to the 
            <a href="http://www.worldskate.org/olympic-qualifying-system/qualification-system.html">qualification system</a>.
          </p>
        </header>
        <main class="main-content">
          <section class="standings">
            <div class="discipline">
              <h2 class="discipline-heading">Street</h2>
              <div class="events">
                <div class="event event-one">
                  <h3 class="event-heading">Men's Street</h3>
                  <ol class="competitor-list">
                    ${
                      mensStreet
                        .map( skater => `<li>${Card({...skater, alpha2: getCountryAlpha2(skater)})}</li>` )
                        .reduce( (acc, cur) => acc.concat(cur) )
                    }
                  </ol>
                </div>
                <div class="event event-two">
                  <h3 class="event-heading">Women's Street</h3>
                  <ol class="competitor-list">
                    ${
                      womensStreet
                        .map( skater => `<li>${Card({...skater, alpha2: getCountryAlpha2(skater)})}</li>` )
                        .reduce( (acc, cur) => acc.concat(cur) )
                    }
                  </ol>
                </div>
              </div>
            </div>
            <div class="discipline">
              <h2 class="discipline-heading">Park</h2>
              <div class="events">
                <div class="event event-one">
                  <h3 class="event-heading">Men's Park</h3>
                  <ol class="competitor-list">
                    ${
                      mensPark
                        .map( skater => `<li>${Card({...skater, alpha2: getCountryAlpha2(skater)})}</li>` )
                        .reduce( (acc, cur) => acc.concat(cur) )
                    }
                  </ol>
                </div>
                <div class="event event-two">
                  <h3 class="event-heading">Women's Park</h3>
                  <ol class="competitor-list">
                    ${
                      womensPark
                        .map( skater => `<li>${Card({...skater, alpha2: getCountryAlpha2(skater)})}</li>` )
                        .reduce( (acc, cur) => acc.concat(cur) )
                    }
                  </ol>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2>How does this work?</h2>
            <p>
              Each of the four events takes the top 20 skaters by points ranking.<br />
              <strong>But&hellip;</strong><br />
              Each country has a maximum of three skaters in each event.<br />
              <strong>And&hellip;</strong><br />
              Each continental region must have a competitor.<br />
              <strong>Also&hellip;</strong><br />
              Japan must be represented in each event.<br />
              <strong>Oh, and one more thing&hellip;</strong><br />
              The top three places in the 2020 World Championships for 
              <a 
                href="http://www.worldskate.org/skateboarding/events-skateboarding/competitions/event/73.html" 
                title="World Skate Park World Championships"
              >Park</a> and 
              <a 
                href="http://www.worldskate.org/skateboarding/events-skateboarding/competitions/event/72.html" 
                title="World Skate / SLS World Championships"
              >Street</a> automatically qualify.
            </p>
          </section>
        </main>
      </body>
    </html>
  `);
  
  function getCountryAlpha2(skater){
    return countries.find( country => country.name === skater.country).alpha2;
  }

};
