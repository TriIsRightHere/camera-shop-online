const Camera = require('./models/Camera');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    index = (req, res, next) => {
        Camera.find({})
            .then((cameras) => {
                res.render('home', {
                    cameras: multipleMongooseToObject(cameras)
                });
            })
            .catch((err) => {
                res.status(400).json({ error: 'ERROR!!' });
            });
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
