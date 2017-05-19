var express = require('express');
var router = express.Router();
var pg= require('pg');
const connect= process.env.DATABASE_URL || 'postgres://postgres:password@localhost:5432/30hills';
var async = require('async');
var dataquery=require('../Data/dataquery');
var session =require('express-session');


/* GET home page. */
router.get('/', function(req, res, next) {

    var results;

  pg.connect(connect, function (err, client,done) {


    if(err){
        console.log("Greska pri povezivanju ");
    }

    client.query('SELECT * FROM ljudi',function (err, result) {

      if(err){
        console.log('Upit se ne moze izvrsiti');
      }

         res.json(result.rows);
      done();

    });



  });



});

/* GET Direct Freinds . */
router.get('/direct/:id', function(req, res, next) {

     var id= req.params.id;

    pg.connect(connect, function (err, client, done) {

        if (err) {
            console.log('Konkecija nije uspijela ' + err);
        }
        client.query('Select * FROM ljudi where id = any ((select friends FROM ljudi where id=$1)::int[]) ',[id], function (err, result) {

            if (err ) {
                console.log('Upit se ne moze izvrisit' + err);
            }else {

                console.log(result.rows);
                res.json(result.rows);
            }
        });


    });
});

/* GET Freinds of Freinds . */
router.get('/freinds/:id', function(req, res, next) {

    var id= req.params.id;

    pg.connect(connect, function (err, client, done) {

        if (err) {
            console.log('Konkecija nije uspijela ' + err);
        }
        client.query(` WITH SS  AS ( SELECT  unnest(friends)AS frendsid FROM ljudi WHERE id =any ((SELECT friends FROM ljudi WHERE id=$1)::int[]) )
                       SELECT * FROM ljudi 
                       WHERE id = any(SELECT * FROM SS) AND id<> $1 
                       except
                       SELECT  *  FROM ljudi WHERE id =any ((SELECT friends FROM ljudi WHERE id=$1)::int[]) `,[id], function (err, result) {

            if (err ) {
                console.log('Upit se ne moze izvrisit' + err);
            }else {

                console.log(result.rows);
                res.json(result.rows);
            }
        });


    });
});
/* Suggested freinds */
router.get('/suggestion/:id', function(req, res, next) {

    var id= req.params.id;

    pg.connect(connect, function (err, client, done) {

        if (err) {
            console.log('Konkecija nije uspijela ' + err);
        }
        client.query(` WITH SS  AS ( SELECT  unnest(friends)AS frendsid FROM ljudi WHERE id =any ((SELECT friends FROM ljudi WHERE id=$1)::int[]) )
                       SELECT * FROM ljudi 
                       WHERE id = any(SELECT * FROM SS) AND id<> $1  
                       group by id
                       having count(friends[2])=1 
                        except
                       SELECT  *  FROM ljudi WHERE id =any ((SELECT friends FROM ljudi WHERE id=$1)::int[]) `,[id], function (err, result) {

            if (err ) {
                console.log('Upit se ne moze izvrisit' + err);
            }else {

                console.log(result.rows);
                res.json(result.rows);
            }
        });


    });
});

module.exports = router;
