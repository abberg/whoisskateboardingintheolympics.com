module.exports = data => /*html*/`
  <div class="card">
    <div class="card-figure">
      <div 
        class="card-image"
        style="background-image:url('img/${data.name.toLowerCase().replace(/ /g, '_').replace("'", '')}.jpg')"
      ></div>
    </div>
    <div class="card-content">
      <p class="card-name">${data.name}</p>
      <p class="card-country">
        <span class="flag-icon flag-icon-${data.alpha2.toLowerCase()}"></span>
        &nbsp;
        ${data.country}
      </p>
    </div>
  </div>
`;