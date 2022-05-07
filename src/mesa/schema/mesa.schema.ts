import { Schema } from "mongoose";
//import { Plato } from "src/plato/interface/plato.interface";

export const MesaSchema = new Schema({
    numeroDeMesa : {type: Number, required: true},
    ubicacion : {type: String, required: true},
    total : {type: Number, required: true},
    //platos : {type: [], required: true}

});