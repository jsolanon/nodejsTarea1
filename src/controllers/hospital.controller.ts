import { Request, Response, Router } from 'express';
import { ErrorHandler, handlerError } from '../error';
import bodyHospiValidations from '../middlewares/hospitales/hospital.validator';
import validator_handler from '../middlewares/validator';
import Hospital from '../models/hospitales';

const router = Router();

//Registrar Hospitales
//POST

router.post('/', bodyHospiValidations, validator_handler, async (req: Request, res: Response) => {
    try {
        const { nombre, pacientes_activos, pacientes_max
            , cantidad_personal, fechaCreacion, fechaModificacion } = req.body;
        let hospital = new Hospital({ nombre, pacientes_activos, pacientes_max
            , cantidad_personal, fechaCreacion, fechaModificacion })
        // res.status(200).send(nombre)
        const response = await hospital.save()
        res.status(200).send(response);
    }
    catch(err) {
        console.log('Error: ', err);
        const custom = new ErrorHandler(400, "Error when try to save a Hospital");
        handlerError(custom, req, res);
    }
})

export default router;