import {H2Opreferita, User} from '../../api-types/user';
import DB from './db';

// const examSchema = new DB.Schema<Exam>({
//         // _id: String,
//         name: String,
//         created_by: String,
//         classes: [String],
//         max_time: String,
//         domande:[domandeSchema],
// },

const userSchema = new DB.Schema<User>({
    nome: String,
    cognome: String,
    email: String,
    password: String,
    h2o_preferita : {
        type: String,
        enum: ['evian' , 'rocchetta' , 'granarolo' ],
    }
},
{
    timestamps:{
        createdAt:'created_at',
        updatedAt:'updated_at',
    }
})

export const UserModel = DB.model("esempio", userSchema)

//creazione metodo per una get
export const cercaTutto = async() => {
    return UserModel.find({});   
}
//creazione metodo per una insert
export const InserisciUser = async (user: User) =>{
    const nuovoUser = new UserModel(user);
    return nuovoUser.save();
}