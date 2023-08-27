const pool = require("../db");

class empdao{
    async getAll(){
        try{
            const allemp = await pool.query("SELECT * FROM emp_details ORDER BY eid;");
            console.log("finaly gotcha")
            
            return allemp.rows

        }
        catch(error){
            console.log(error.message)
            console.log("getallprob")
        }
    }
    async getByid(id){
        try{
        const emp = await pool.query("SELECT * FROM emp_details WHERE eid = $1",[id]);
        console.log("gotcha by id")
    }
    catch(error){
        console.log(error.message)
        console.log("here is error")
    }

    }
    async add(emp_name,emp_id,age,gender,qualification){
        try{
            const newEmp = await pool.query("INSERT INTO emp_details (emp_name,emp_id,age,gender,qualification) values($1,$2,$3,$4,$5) RETURNING *",
            [emp_name,emp_id,age,gender,qualification]);
            console.log("yeah added")
            return newEmp.rows[0]
        } catch (error){
            console.log(error.message)
           
        }
    }
    async delete (eid){
        try{
            const deleteEmp = await pool.query("DELETE FROM emp_details WHERE eid = $1",[eid]);
            console.log("deleted in db")
        }
        catch(error){
            console.log(error)
        }
    }
    async update (emp_name,emp_id,age,gender,qualification,Eid){
        try{
            const updateEmp = await pool.query("UPDATE emp_details SET emp_name=$1,emp_id=$2, age=$3, gender =$4, qualification =$5 WHERE eid=$6",[emp_name,emp_id,age,gender,qualification,Eid]);
            console.log("updted db")
        }
        catch(error){
            console.log(error)
        }
    }
}
module.exports = new empdao();  