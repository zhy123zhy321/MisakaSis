/* global algoliasearch instantsearch */

const searchClient = algoliasearch(
  '7MXMJHTAW7',
  '1d9ed3a31ec6ef9514f2ad7d174a97c9'
);

const search = instantsearch({
  indexName: 'MisakaSis',
  searchClient,
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <article>
          <h1><a href="{{#helpers.highlight}}{ "attribute": "search" }{{/helpers.highlight}}">{{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}</a></h1>
		  <p>{{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}</p>
		  <p>{{#helpers.highlight}}{ "attribute": "date" }{{/helpers.highlight}}</p>  
        </article>
      `,
    },
  })
);
//<p>{{#helpers.highlight}}{ "attribute": "categories" }{{/helpers.highlight}}</p>
//<p>{{#helpers.highlight}}{ "attribute": "tags" }{{/helpers.highlight}}</p>
search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
  })
);

search.start();
