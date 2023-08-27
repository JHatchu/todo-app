
const empdao = require("../empdao/empdao")

class empservice{
    async getAll(){
        try{
            console.log("service get");
        return await empdao.getAll()
        
    }
        catch(error){
            console.log(error.message)
        }
    }
    async getById(id){
        return await empdao.getByid(id)
    }
    async add(emp){
        try{
        const {emp_name,emp_id,age,gender,qualification} = emp;
        console.log("service add")
        return await empdao.add(emp_name,emp_id,age,gender,qualification)
        
    }catch(error){
        console.log(error)
    }    
        
    }
    async delete (eid){
        await empdao.delete(eid)
        console.log("ser del")
    }
     
    async update (emp){
        const {emp_name,emp_id,age,gender,qualification,id} = emp;
        await empdao.update (emp_name,emp_id,age,gender,qualification,id)
        console.log("upd ser")
    }

}module.exports = new empservice()