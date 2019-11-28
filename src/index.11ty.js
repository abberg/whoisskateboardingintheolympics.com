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
        <meta charset="utf-8" />
        <title>Who is Skateboarding in the Olympics?</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed:600|Barlow:400,400i,600&display=swap">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/css/flag-icon.min.css">
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <header>
          <h1>
            <img src="img/skateboarding-pictogram.svg" alt="Olympic Skateboarding pictogram" width="128"> 
            Who is Skateboarding in the Olympics?
          </h1>
          <p>
            If the Olympics were held today, here's who would compete according to the 
            <a href="http://www.worldskate.org/olympic-qualifying-system/qualification-system.html">qualification system</a>.
          </p>
        </header>
        <main>
          <article>
            <h2>Street</h2>
            <div class="event">
              <section>
                <h3>Men's Street</h3>
                <ol>
                  ${mensStreet
                    .map( skater => `<li>${Card({...skater, alpha2: getCountryAlpha2(skater)})}</li>` )
                    .reduce( (acc, cur) => acc.concat(cur) )
                  }
                </ol>
              </section>
              <section>
                <h3>Women's Street</h3>
                <ol>
                  ${womensStreet
                    .map( skater => `<li>${Card({...skater, alpha2: getCountryAlpha2(skater)})}</li>` )
                    .reduce( (acc, cur) => acc.concat(cur) )
                  }
                </ol>
              </section>
            </div>
          </article>
          <article>
            <h2>Park</h2>
            <div class="event">
              <section>
                <h3>Men's Park</h3>
                <ol>
                  ${mensPark
                    .map( skater => `<li>${Card({...skater, alpha2: getCountryAlpha2(skater)})}</li>` )
                    .reduce( (acc, cur) => acc.concat(cur) )
                  }
                </ol>
              </section>
              <section>
                <h3>Women's Park</h3>
                <ol>
                  ${womensPark
                    .map( skater => `<li>${Card({...skater, alpha2: getCountryAlpha2(skater)})}</li>` )
                    .reduce( (acc, cur) => acc.concat(cur) )
                  }
                </ol>
              </section>
            </div>
          </article>
        </main>
      </body>
    </html>
  `);
  
  function getCountryAlpha2(skater){
    return countries.find( country => country.name === skater.country).alpha2;
  }

};
