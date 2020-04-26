// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

const baseUrl = 'https://tanoshii-works.microcms.io/api/v1';

module.exports = function (api) {
  api.loadSource(async actions => {

    // Personality
    const { data: personalityData } = await axios.get(`${baseUrl}/personality`, {
      headers: {'X-API-KEY': process.env.API_KEY}
    });
    const personality = actions.addCollection({
      typeName: 'Personality'
    });

    for ( const item of personalityData.contents ) {
      personality.addNode({
        id: item.id,
        name: item.name,
        image: item.image.url,
        content: item.content,
        social: item.social,
      })
    }

    // Use the Data Store API here: https://gridsome.org/docs/data-store-api
  });
};
