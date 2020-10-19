import { Schema, model, Document } from 'mongoose';

const HospiSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    pacientes_activos: {
        type: Number,
        required: true
    },
    pacientes_max: {
        type: Number,
        required: true
    },
    cantidad_personal: {
        type: Number,
        required: true
    },
    fechaCreacion: {
        type: Date,
        required: false
    },
    fechaModificacion: {
        type: Date,
        required: false
    }
})

interface IHospitalSchema extends Document {
    nombre: string;
    pacientes_activos: number;
    pacientes_max: number;
    cantidad_personal: number;
    fechaCreacion: Date;
    fechaModificacion: Date;
}

export default model <IHospitalSchema>('User', HospiSchema);