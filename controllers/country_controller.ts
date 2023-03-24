import { Request, Response } from 'express';
import Country from '../database/models/country';

export const getCountries = async (req: Request, res: Response) => {
    const posts = await Country.findAll({
        where: { status: true }
    });
    res.json({posts});
}

export const getCountry = async (req: Request, res: Response) => {
    const { id } = req.params;
    const post = await Country.findByPk(id);

    if (post) {
        return res.json(post);
    } 
    res.status(404).json({
        msg: `No existe un post con el id ${id}`
    });
}

export const createPost = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        
        const post = new Post(body);
        await Country.save();
        res.json(post); 

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
        
    }
}

export const updatePost = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {

        const post = await Country.findByPk(id);

        if (!post) {
            return res.status(400).json({
                msg: 'No existe un post con el id ' + id
            });
        }
        
        await Country.update(body);
        res.json(post); 

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
        
    }
}

export const deletePost = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {

        const post = await Country.findByPk(id);

        if (!post) {
            return res.status(400).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }
        
        await Country.update({ status: false });
        res.json(post); 

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
        
    }
}
