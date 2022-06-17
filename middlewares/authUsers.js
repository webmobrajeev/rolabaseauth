import JWT from 'jsonwebtoken'
import createHttpError from 'http-errors'
const verifyAccessToken = (req, res, next)=>{
    if(!req.headers['authorization']) return next(createHttpError.Unauthorized())
    const Bearer = req.headers['authorization']
    const bearerToken= Bearer.split(" ")
    const token=bearerToken[1]
    const isVerify= JWT.verify(token, process.env.ACCESS_TOKEN, (err, payload)=>{
        if(err) return next(createHttpError.Unauthorized())
        req.payload=payload
        next()
    })
}

export {verifyAccessToken}