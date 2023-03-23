import { Request, Response } from 'express';

export const getUsers = (req: Request, res: Response) => {
    res.json({
        ok: true,
        msg: 'getUsers'
    });
}

export const getUser = (req: Request, res: Response) => {
    res.json({
        ok: true,
        msg: 'getUser'
    });
}

export const createUser = (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    res.json({
        ok: true,
        msg: 'createUser'
    });
}

export const updateUser = (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email } = req.body;
    res.json({
        ok: true,
        msg: 'updateUser'
    });
}

export const deleteUser = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        ok: true,
        msg: 'deleteUser'
    });
}


