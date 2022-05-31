const express = require('express');
const app = express();
const fs = require('fs');
const appError = require('./helpers/error.helper')
const {ErrorType} = require('./helpers/enum')
const errorHandllerMiddleware = require('./middleware/errorHandlingMiddleware');
const DetailsChecker = require('./middleware/details');
const resMiddleware = require('./middleware/resMiddleware');
const { resetWatchers } = require('nodemon/lib/monitor/watch');

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(resMiddleware)

app.post('/api',DetailsChecker,(req,res)=>{
    res.status(200).send('success...');
});

app.get('/getdata',(req,res, next)=>{
    try {
        if(req.body !== "" || req.body !== undefined){
            throw new appError("Please enter the name",ErrorType.invalid_request);
        }
    } catch (error) {
        next(error)
    }        
});

app.use('*', (req, res,next) => {
    try {
        
        throw new appError("Page Not found",ErrorType.not_found);
    } catch (error) {
        next(error)
    }
    
});
app.use(errorHandllerMiddleware);

PORT= 3000;
app.listen(PORT,(req,res)=>{
    console.log(`Server is running at PORT ${3000}`);
})