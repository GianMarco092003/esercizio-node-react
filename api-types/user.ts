export type User = {
    nome: string;
    cognome: string;
    id: string;
    email: string;
    password: string;
    updated_at: Date;
    created_at: Date;
    h2o_preferita: H2Opreferita;
}

export type H2Opreferita = 'evian' | 'rocchetta' | 'granarolo'