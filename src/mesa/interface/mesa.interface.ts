import { Document } from 'mongoose';

export interface Mesa extends Document{
    readonly numeroDeMesa: number;
    readonly ubicacion: string;
    //readonly platos: Plato[];
    readonly total: number;
}