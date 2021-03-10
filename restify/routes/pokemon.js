const errors = require('restify-errors');
const Pokemon = require('../models/Pokemon');

module.exports = server => {

    server.get('/api/pokemon', async (req, res, next) => {
        const pokemon = await Pokemon.find({});
        res.send(pokemon);
        next();
    });

    server.get('/api/pokemon/:id', async (req, res, next) => {
        try {
            const pokemon = await Pokemon.findById(req.params.id);
            res.send(pokemon);
            next();
        } catch (error) {
            return next(error);
        }
    });

    server.post('/api/pokemon', async (req, res, next) => {
        const {name, email} = req.body;
        try {
            const pokemon = new Pokemon({
                name, email
            });
            const NewPokemon = await pokemon.save();
            res.send(NewPokemon, 201);
            next();
        } catch (err) {
            return err;
        }
    });

    server.put('/api/pokemon/:id', async (req, res, next) => {
        try {
            const pokemon = await Pokemon.findOneAndUpdate({_id: req.params.id}, req.body);
            res.send(204);
            next();
        } catch (err) {
            return next(new errors.ResourceNotFound(err));
        }
    });

    server.del('/api/pokemon/:id', async (req, res, next) => {
        try {
            const pokemon = await Pokemon.findOneAndRemove({_id: req.params.id});
            res.send(204);
            next();
        } catch (err) {
            return next(new errors.ResourceNotFound(err));
        }
    });
};