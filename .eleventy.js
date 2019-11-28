module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./src/favicon.ico');
  eleventyConfig.addPassthroughCopy('./src/styles.css');
  eleventyConfig.addPassthroughCopy('./src/img/');

  const Card = require(`./src/_includes/Card.js`);
  eleventyConfig.addShortcode('Card', Card);
  
  const filterQualified = require('./src/_includes/filterQualified.js');
  eleventyConfig.addFilter('filterQualified', filterQualified);

};
