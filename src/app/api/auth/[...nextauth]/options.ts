import  type  {NextAuthOptions}  from "next-auth"; 
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider  from "next-auth/providers/credentials";


export const  options = {
providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_ID as string,
        clientSecret: process.env.GOOGLE_SECRET as string
    }),
    CredentialsProvider({
        name:"Credentials",
    credentials:{
        username:{
            label:"Username",type:"text",placeholder:"Enter your Username"
        },
        password:{
            label:"Password",type:"password",placeholder:"Enter your Password"
        }

    }, async authorize(credentials){
        const user= {id:"42 ", name:"John", password:"nextauth"}
        if(credentials?.username==user.name && credentials?.password==user.password){
            return user
        }
        else{
            return null;
        }
        

    }
    })
],


}