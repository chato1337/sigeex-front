export interface Documento {
    id: number;
    name: string;
    code: string;
    created_at?: any;
    updated_at?: any;
}

export interface Correo {
    id: number;
    persona_id: number;
    descripcion: string;
    created_at: Date;
    updated_at: Date;
}

export interface Persona {
    id: number;
    estado: number;
    nombres: string;
    apellidos: string;
    fecha_nacimiento: string;
    documento_id: number;
    numero_documento: number;
    created_at: Date;
    updated_at: Date;
    documento: Documento;
    correo: Correo[];
}


