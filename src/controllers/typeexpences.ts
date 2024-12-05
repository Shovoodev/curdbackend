import express from 'express'
import { allTypes, createType } from './../db/typeexpenses';

export const createNewType = async (
    req: express.Request,
    res: express.Response
  ): Promise<any> => {
    try {
      const { typeOfExpenses } = req.body;
      console.log(typeOfExpenses)
      if (!typeOfExpenses) {
        return res.sendStatus(400);
      }
      const productType = await createType({
        typeOfExpenses
      });
      return res.status(200).json(productType).end();
    } catch (error) {
      console.error(error);
    }
  };
  
export const getAllTypes = async (
    req: express.Request,
    res: express.Response
  ): Promise<any> => {
    try {
      const products = await allTypes();
      return res.status(200).json(products).end();
    } catch (error) {
      console.log(error);
      res.status(400);
    }
  };