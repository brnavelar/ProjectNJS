import {openDB} from '../configDB.js';

export async function createTable(){
    openDB().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS reservas (codigo integer primary key, mesa_pessoas varchar(5) not null, nome varchar(30) not null, num_tel varchar(11) not null, email varchar(30) not null)')
    });
}

export async function listar(req, res){
    openDB().then(db=>{
        db.all('SELECT * FROM reservas')
       .then(reservas => res.json(reservas))
   });
}

export async function inserir(req, res){
    let reserva = req.body;
    openDB().then(db=>{
        db.run('INSERT INTO reservas (mesa_pessoas, nome, num_tel, email) VALUES (?, ?, ?, ?)', [reserva.mesa_pessoas, reserva.nome, reserva.num_tel, reserva.email])
    });
    res.json({
        "statusCode":200
    });
}

export async function editar(req, res){
    let reserva = req.body;
    openDB().then(db=>{
        db.run('UPDATE reservas SET mesa_pessoas=?, nome=?, num_tel=?, email=? WHERE codigo=?', [reserva.mesa_pessoas, reserva.nome, reserva.num_tel, reserva.email, reserva.codigo])
    });
    res.json({
        "statusCode":200
    });
}

export async function excluir(req, res){
    let codigo = req.body.codigo;
     openDB().then(db=>{
         db.get('DELETE FROM reservas WHERE codigo=?', [codigo])
        .then(res=>res)
    });
    res.json({
        "statusCode":200
    });
}