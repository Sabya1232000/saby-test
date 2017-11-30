const express = require('express');
const router = express.Router();

const mongojs = require('mongojs');
       
//go to mLab and then click on Database Name,
//then  copy URL under "To connect using a driver via the standard MongoDB URI"
const db = mongojs('mongodb://test:Welcome%401@ds117336.mlab.com:17336/tasklist_saby', ['tasks']); 



//get all tasks
router.get('/tasks', (req, res, next) =>{
    db.tasks.find(function (err, docs){
        if(err){
            res.send(err);
        }
        res.json(docs);
    });
    //res.render(index.html);		
});

//get single task
router.get('/task/:id', (req, res, next) =>{
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, doc) => {
        if(err){
            res.send(err);
        }
        res.json(doc);
    });
    //res.render(index.html);		
});

//save task
router.post('/task', (req, res, next) =>{
    var task = req.body;
    if(!task.title || !(task.isDone + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    }
    db.tasks.save(task, (err, doc) => {
        if(err){
            res.send(err);
        }
        res.json(doc);
    });
    //res.render(index.html);		
});

//Delete a task
router.delete('/task/:id', (req, res, next) =>{
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, (err, doc) => {
        if(err){
            res.send(err);
        }
        res.json(doc);
    });
    //res.render(index.html);		
});

//Update a task
router.put('/task/:id', (req, res, next) =>{
    var task = req.body;
    var updTask = {};
    if(task.isDone){
        updTask.isDone = task.isDone; 
    }
    if(task.title){
        updTask.title = task.title; 
    }

    if(!updTask){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    }else{
        db.tasks.update({_id: mongojs.ObjectId(req.params.id)}, updTask, (err, doc) => {
        if(err){
            res.send(err);
        }
        res.json(doc);
        });
    }
    //res.render(index.html);		
});
module.exports = router;