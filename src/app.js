//////////////////////////////////////////////////////////////////////////// L43. Hello Express!

/*
const express = require('express');

const app = express();

app.get('', (req, res) => {
  res.send('Hello express!');
});

app.get('/help', (req, res) => {
  res.send('Help page');
});

// Challenge
app.get('/about', (req, res) => {
  res.send("This is Paul's first server");
});

// Challenge
app.get('/weather', (req, res) => {
  res.send('This page shows the weather forecast')
})

// app.com
// app.com/help
// app.com/about // challenge
// app.com/weather // challenge

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
*/

//////////////////////////////////////////////////////////////////////////
// L44. Serving up HTML and JSON

/*
const express = require('express');

const app = express();

app.get('', (req, res) => {
  res.send('<h1>First content</h1>');
});

// app.get('/help', (req, res) => {
//   res.send({
//     name: 'Paul',
//     age: 55
//   });
// });

app.get('/help', (req, res) => {
  res.send([{
    name: 'Paul'
  }, {
    name: 'Moca'
  }]);
});

// Challenge
app.get('/about', (req, res) => {
  res.send('<h1>DINAMO BUCUREŞTI FOREVER</h1>');
});

// Challenge
app.get('/weather', (req, res) => {
  res.send({
    location: 'Bucureşti',
    forecast: 'Misty night'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
*/

//////////////////////////////////////////////////////////////////////////// L45. Serving up Static Assets

/*
const path = require('path');
const express = require('express');

// console.log(__dirname);
// console.log(path.join(__dirname, '../public'));

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

// app.get('', (req, res) => {
//   res.send('<h1>First content</h1>');
// });

// app.get('/help', (req, res) => {
//   res.send([{
//     name: 'Paul'
//   }, {
//     name: 'Moca'
//   }]);
// });

// app.get('/about', (req, res) => {
//   res.send('<h1>DINAMO BUCUREŞTI FOREVER</h1>');
// });

app.get('/weather', (req, res) => {
  res.send({
    location: 'Bucureşti',
    forecast: 'Misty night'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
*/

//////////////////////////////////////////////////////////////////////////// L46. Serving up CSS, JS, Images, and More

//////////////////////////////////////////////////////////////////////////// L47. Dynamic Pages with Templating

/*
const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Paul B.'
  });
});

app.get('./about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Paul B.'
  });
});

app.get('./help', (req, res) => {
  res.render('help', {
    title: 'Help page',
    name: 'Paul B.'
  });
});

app.get('/weather', (req, res) => {
  res.send({
    location: 'Bucureşti',
    forecast: 'Misty night'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
*/

//////////////////////////////////////////////////////////////////////////// L48. Customizing the Views Directory

/*
const path = require('path');
const express = require('express');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../views');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Paul B.'
  });
});

app.get('./about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Paul B.'
  });
});

app.get('./help', (req, res) => {
  res.render('help', {
    title: 'Help page',
    name: 'Paul B.'
  });
});

app.get('/weather', (req, res) => {
  res.send({
    location: 'Bucureşti',
    forecast: 'Misty night'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
*/

///////////////////////////////////////////////////////////////////////////// L49. Advanced Templating

/*
const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../views');
const partialsPath = path.join(__dirname, '../partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Paul B.'
  });
});

app.get('./about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Paul B.'
  });
});

app.get('./help', (req, res) => {
  res.render('help', {
    title: 'Help page',
    name: 'Paul B.'
  });
});

app.get('/weather', (req, res) => {
  res.send({
    location: 'Bucureşti',
    forecast: 'Misty night'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
*/

///////////////////////////////////////////////////////////////////////////// L50. 404 Pages

/*
const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../views');
const partialsPath = path.join(__dirname, '../partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather Page',
    name: 'Paul B.'
  });
});

app.get('./about', (req, res) => {
  res.render('about', {
    title: 'About Page',
    name: 'Paul B.'
  });
});

app.get('./help', (req, res) => {
  res.render('help', {
    title: 'Help Page',
    name: 'Paul B.'
  });
});

app.get('/weather', (req, res) => {
  res.send({
    location: 'Bucureşti',
    forecast: 'Misty night'
  });
});

// app.get('/help/*', (req, res) => {
//   res.send('Article not found.');
// });

// app.get('*', (req, res) => {
//   res.send('My 404 page');
// });

// Challenge
app.get('/help/*', (req, res) => {
  res.render('error', {
    title: 'error',
    name: 'Paul B.',
    errorMessage: 'Article not found!'
  });
});

app.get('*', (req, res) => {
  res.render('error', {
    title: 'error',
    name: 'Paul B.',
    errorMessage: 'Page not found!'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
*/

//////////////////////////////////////////////////////////////////////////// L51. Styling the Application - Part I

//////////////////////////////////////////////////////////////////////////// L52. Styling the Application - Part II

//////////////////////////////////////////////////////////////////////////
// L53. Section Intro Accessing API from Browser

//////////////////////////////////////////////////////////////////////////
// L54. The Query String

/*
const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../views');
const partialsPath = path.join(__dirname, '../partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather Page',
    name: 'Paul B.'
  });
});

app.get('./about', (req, res) => {
  res.render('about', {
    title: 'About Page',
    name: 'Paul B.'
  });
});

app.get('./help', (req, res) => {
  res.render('help', {
    title: 'Help Page',
    name: 'Paul B.'
  });
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term!'
    });
  };

  console.log(req.query.search);
  res.send({
    products: []
  });
});

// app.get('/weather', (req, res) => {
//   res.send({
//     location: 'Bucureşti',
//     forecast: 'Misty night'
//   });
// });

// Challenge
app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'Yoy must provide an address!'
    });
  };

  res.send({
    location: 'Bucureşti',
    forecast: 'Misty night',
    address: req.query.address
  });
});

app.get('/help/*', (req, res) => {
  res.render('error', {
    title: 'error',
    name: 'Paul B.',
    errorMessage: 'Article not found!'
  });
});

app.get('*', (req, res) => {
  res.render('error', {
    title: 'error',
    name: 'Paul B.',
    errorMessage: 'Page not found!'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
*/

//////////////////////////////////////////////////////////////////////////// L55. Building a JSON HTTP Endpoint

/*
const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../views');
const partialsPath = path.join(__dirname, '../partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather Page',
    name: 'Paul B.'
  });
});

app.get('./about', (req, res) => {
  res.render('about', {
    title: 'About Page',
    name: 'Paul B.'
  });
});

app.get('./help', (req, res) => {
  res.render('help', {
    title: 'Help Page',
    name: 'Paul B.'
  });
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term!'
    });
  };

  console.log(req.query.search);
  res.send({
    products: []
  });
});

// app.get('/weather', (req, res) => {
//   if (!req.query.address) {
//     return res.send({
//       error: 'Yoy must provide an address!'
//     });
//   };

//   res.send({
//     location: 'Bucureşti',
//     forecast: 'Misty night',
//     address: req.query.address
//   });
// });

// Challenge
app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'Yoy must provide an address!'
    });
  };

  geocode(req.query.address, (error, { latitude, longitude, location }) => {
    if (error) {
      return res.send({ error: error });
    };

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      };

      res.send({
        forecast: forecastData,
        location: location,
        address: req.query.address
      });
    });
  });

  // res.send({
  //   location: 'Bucureşti',
  //   forecast: 'Misty night',
  //   address: req.query.address
  // });
});

app.get('/help/*', (req, res) => {
  res.render('error', {
    title: 'error',
    name: 'Paul B.',
    errorMessage: 'Article not found!'
  });
});

app.get('*', (req, res) => {
  res.render('error', {
    title: 'error',
    name: 'Paul B.',
    errorMessage: 'Page not found!'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
*/

//////////////////////////////////////////////////////////////////////////// L56. ES6 Aside - Default Function Parameters

/*
const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../views');
const partialsPath = path.join(__dirname, '../partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather Page',
    name: 'Paul B.'
  });
});

app.get('./about', (req, res) => {
  res.render('about', {
    title: 'About Page',
    name: 'Paul B.'
  });
});

app.get('./help', (req, res) => {
  res.render('help', {
    title: 'Help Page',
    name: 'Paul B.'
  });
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term!'
    });
  };

  console.log(req.query.search);
  res.send({
    products: []
  });
});

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'Yoy must provide an address!'
    });
  };

  geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({ error: error });
    };

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      };

      res.send({
        forecast: forecastData,
        location: location,
        address: req.query.address
      });
    });
  });
});

app.get('/help/*', (req, res) => {
  res.render('error', {
    title: 'error',
    name: 'Paul B.',
    errorMessage: 'Article not found!'
  });
});

app.get('*', (req, res) => {
  res.render('error', {
    title: 'error',
    name: 'Paul B.',
    errorMessage: 'Page not found!'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
*/

//////////////////////////////////////////////////////////////////////////// L57. Browser HTTP Requests with Fetch

const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../views');
const partialsPath = path.join(__dirname, '../partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather Page',
    name: 'Paul B.'
  });
});

app.get('./about', (req, res) => {
  res.render('about', {
    title: 'About Page',
    name: 'Paul B.'
  });
});

app.get('./help', (req, res) => {
  res.render('help', {
    title: 'Help Page',
    name: 'Paul B.'
  });
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term!'
    });
  };

  console.log(req.query.search);
  res.send({
    products: []
  });
});

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'Yoy must provide an address!'
    });
  };

  geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({ error: error });
    };

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      };

      res.send({
        forecast: forecastData,
        location: location,
        address: req.query.address
      });
    });
  });
});

app.get('/help/*', (req, res) => {
  res.render('error', {
    title: 'error',
    name: 'Paul B.',
    errorMessage: 'Article not found!'
  });
});

app.get('*', (req, res) => {
  res.render('error', {
    title: 'error',
    name: 'Paul B.',
    errorMessage: 'Page not found!'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});

//////////////////////////////////////////////////////////////////////////// L58. Creating a Search Form

//////////////////////////////////////////////////////////////////////////// L59. Wiring up the User Interface

//////////////////////////////////////////////////////////////////////////// L64. Integrating Git

