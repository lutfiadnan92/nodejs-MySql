const db = require('../../config/db')

exports.Create = (req,res) =>{
  const query = "insert into user set ?"
  const field = {
    id : req.body.id,
    nama : req.body.nama,
    password : req.body.password
  }
  db.query(query, field, (err, data)=>{
    if (err)
      return res.send({
        Status : "400",
        Pesan : "User creation failed",
        Result : err
      })
    return res.json({
        Status : "200",
        Pesan : "User creation successfully",
        Result : data
    })
  })
}

exports.getAll = (req,res) =>{
  const query = "select * from user"
  db.query(query, (err, data)=>{
    if (err)
      return res.send({
        Status : "400",
        Pesan : "Failed",
        Result : err
      })
    return res.json({
        Status : "200",
        Pesan : "Success",
        Result : data
    })
  })
}

exports.findByName = (req,res) =>{
  const query = "select id, nama from user where nama = "+req.params.nama+""
  db.query(query, (err, data)=>{
    if (err)
      return res.send({
        Status : "400",
        Pesan : "Failed",
        Result : err
      })
    return res.json({
        Status : "200",
        Pesan : "Success",
        Result : field
    })
  })
}

exports.Update = (req,res) =>{
  const query = "update user set ? where id = ?"
  const field = {
    id : req.body.id,
    nama : req.body.nama,
    password : req.body.password
  }
  db.query(query, [field, req.body.id], (err, data)=>{
    if (err)
      return res.send({
        Status : "400",
        Pesan : "Update failed",
        Result : err
      })
    return res.json({
        Status : "200",
        Pesan : "Update successfully",
        Result : data
    })
  })
}

exports.Delete = (req,res) =>{
  const query = "delete from user where id = "+req.params.id+""
  db.query(query, (err, data)=>{
    if (err)
      return res.send({
        Status : "400",
        Pesan : "Delete failed",
        Result : err
      })
    return res.json({
        Status : "200",
        Pesan : "Delete success",
        Result : data
    })
  })
}