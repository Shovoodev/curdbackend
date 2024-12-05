import express  from 'express'
import { createNewType, getAllTypes } from '../controllers/typeexpences';


export default (router: express.Router)=> {
    router.post('/typeofexpenses', createNewType);
    router.get('/alltypes' , getAllTypes)
}