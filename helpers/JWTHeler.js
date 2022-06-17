import JWT from 'jsonwebtoken'
import createError from 'http-errors'

    const signAccessToken=(userId)=>{
        return new Promise((resolve, reject)=>{
            const payload={}
            const scret=process.env.ACCESS_TOKEN
            const options={
                expiresIn:"1d",
                issuer: "webmob",
                audience:userId
            }
            JWT.sign(payload, scret, options, (err, token)=>{
                if(err) {
                    console.log(err)
                    reject(createError.InternalServerError())
                }
                resolve(token)
            })
        })
    }
    // signRefeshToken:(userId, role)=>{
    //     return new Promise((resolve, reject)=>{
    //         const payload={}
    //         const scret=process.env.REFRESH_TOKEN
    //         const options={
    //             expiresIn:"15d",
    //             issuer: "webmob",
    //             audience:userId,
    //             role
    //         }
    //         JWT.sign(payload, scret, options, (err, token)=>{
    //             if(err) {
    //                 console.log(err)
    //                 reject(createError.InternalServerError())
    //             }
    //             resolve(token)
    //         })
    //     })
    // }

    export{signAccessToken}