const empservice = require("../empservice/empservice")
const {Router} = require('express')
const router = Router();

router.get("/",async(req,res) => {
    try{
        const result = await empservice.getAll()
        res.json(result);
       
        console.log("route get")
    }
    catch(error){
        console.log(error.message)
    }
})
router.get("/:eid", async(req, res) => {
    const { eid }  = req.params;
    try{
        const result = await empservice.getById(eid)
        res.json(result)
        console.log(result)
        console.log("got route by id")
    }
    catch(error){
        console.log(error.message)
    }
})
router.post("/add", async(req,res) => {
    const emp = req.body
    try{
        const result = await empservice.add(emp)
        res.json(result)
        console.log(result)
        res.send(result)
        console.log("got into router")
    }
    catch(error){
        console.log(error.message)
    }
})
router.delete("/delete/:id",async(req,res) => {
    const {id} = req.params;
    try{
        const result = await empservice.delete(id)
        console.log("del router")

    }
    catch(error){
        console.log(error)
    }

})
router.post("/update", async(req,res)=>{
    try{
    const result = await empservice.update(req.body)
    console.log("yeah")
    }
    catch(error){
        console.log(error)
    }
})
module.exports = router;