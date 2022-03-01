const home =  (req, res) => {
  res.render('index', { title: 'Welcome to Bookinfo' });
}
const abouts =  (req, res) => {
    res.render('about', { title: 'About my site' });
  }

module.exports = {
      home, 
      abouts
  }