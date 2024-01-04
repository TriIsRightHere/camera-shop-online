const Camera = require('./models/Camera');
const { mongooseToObject } = require('../util/mongoose');

class CamerasController {

    show(req, res, next) {
        Camera.findOne({ slug: req.params.slug })
            .then(camera => {
                res.render('cameras/show', { camera: mongooseToObject(camera) });
            })
            .catch(next);
    }

    create(req, res, next) {
        res.render('cameras/create');
    }
    store(req, res, next) {
        res.json(req.body);
    }
}

module.exports = new CamerasController();
