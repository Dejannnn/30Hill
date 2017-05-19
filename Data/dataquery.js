/**
 * Created by Dejan on 11/05/2017.
 */
var pg= require('pg');
const connect= process.env.DATABASE_URL || 'postgres://postgres:password@localhost:5432/30hills';
var session =require('express-session');

module.exports.findIdFrijends= function (id) {
 var prom;
    pg.connect(connect,function (err,client,done) {

        if(err){

            res.send('PG not conneced');
        }
        client.query('SELECT friends FROM ljudi WHERE id= '+ id +'',function (err,result) {
            if(err){
                res.send('Upit se ne moze izvrsiti');
            }else{

                session.mojaSesija = result.rows;
                console.log(session.mojaSesija);
            }
        })
    })


}