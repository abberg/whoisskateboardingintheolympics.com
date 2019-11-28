module.exports = data => /*html*/`
  <div class="card">
    <p class="card-name">${data.name}</p>
    <p class="card-country">
      <span class="flag-icon flag-icon-${data.alpha2.toLowerCase()}"></span>
      &nbsp;
      ${data.country}
    </p>
  </div>
`;