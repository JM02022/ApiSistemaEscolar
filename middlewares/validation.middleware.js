const boom = require('@hapi/boom');

function controlValidar(schema,object){
  return (req,res,next)=>{
    console.log("xdxd")
    const data = req[object];
    const {error} = schema.validate(data);
    if(error){
      throw boom.badRequest(error)
    }
    next();
  }
}

module.exports = controlValidar
