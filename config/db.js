import mongoose from 'mongoose'
const db_connect = async(dbUri, dbName)=>{
    try {
        const connection= await mongoose.connect(dbUri, {
             dbName
         })
         if(connection)console.log(`db connected successfully`)
        
    } catch (error) {
        console.log(`db is not connected`)        
    }
}

export {db_connect}

