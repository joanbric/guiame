import mongoose from "mongoose";

let Users;

async function  load(){
    try{
        const dbpass = process.env.DB_PASSWORD;
        await mongoose.connect(`mongodb+srv://master:${dbpass}@bus.tigys.mongodb.net/guiame?retryWrites=true&w=majority`);
        configUsersSchema();
    }catch(err){
        console.log(err)
    }
}

function configUsersSchema(){
    const usersSchema = new mongoose.Schema({
        name: String,
        emal: String,
        password: String
    });

    Users = mongoose.model('users', usersSchema);
}

async function addUser(name, email, pass){
    try{

        const newUser = new Users({name, email, pass});
        await newUser.save(); 
        return {
            status: true,
            message: 'New user added.'
        }
    }catch(err){
        return{
            status: false,
            message: err
        }
    }
}

async function showUsers(){
    const users = await Users.find();
    console.log(users)
}

async function login(username, password){
    try{
        const user = await Users.findOne({email: username, password});
        console.log(user, "IS", user == null)
        if(user == null) return {status: false, message: "User No Authorized. Bad user or password."};

        return {
            status: true,
            message: 'The user can access.'
        }
    }catch(err){
        return {
            status: false,
            message: err
        }
    }
}

load()

export default {
    login,
    addUser,
    showUsers
}