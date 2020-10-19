import { body } from 'express-validator';

const validations = [
    body('nombre').exists().withMessage('Nombre de Hospital es requerido'),
    body('nombre').if(body('nombre')).exists().isLength({min: 9}).withMessage('Nombre del hospital debe ser mayor a 8 caracteres.'),
    body('pacientes_activos').exists().isNumeric().withMessage('Debe ser un numero'),
    body('pacientes_max').exists().isNumeric().withMessage('Debe ser un numero'),
    body('cantidad_personal').exists().isNumeric().withMessage('Debe ser un numero'),
    body('fechaCreacion').optional().isDate(),
    body('fechaModificacion').optional().isDate()
];

export default validations;