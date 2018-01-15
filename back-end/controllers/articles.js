let Article = require('../models').Article;

module.exports.findAll = (req, res) => {
    Article.findAll()
        .then((results) => {
            res.status(200).json(results)
        })
        .catch(() => res.status(500).send('hm, that was unexpected...'))
}


module.exports.create =(req, res) => {
    Article.create(req.body)
        .then(() => {
            res.status(201).send('created')
        })
        .catch(() => res.status(500).send('hm, that was unexpected...'))
}


module.exports.findById = (req, res) => {
    Article.findById(req.params.id)
        .then((result) => {
            if (result){
                res.status(200).json(result)
            }
            else{
                res.status(404).send('not found')
            }
        })
        .catch(() => res.status(500).send('hm, that was unexpected...'))
}

module.exports.updateById =  (req, res) => {
    Article.findById(req.params.id)
        .then((result) => {
            if (result){
                return result.update(req.body)
            }
            else{
                res.status(404).send('not found')
            }
        })
        .then(() => {
            res.status(201).send('modified')
        })
        .catch(() => res.status(500).send('hm, that was unexpected...'))
}

module.exports.deleteById = (req, res) => {
    Article.findById(req.params.id)
        .then((result) => {
            if (result){
                return result.destroy()
            }
            else{
                res.status(404).send('not found')
            }
        })
        .then(() => {
            res.status(201).send('removed')
        })
        .catch(() => res.status(500).send('hm, that was unexpected...'))
}