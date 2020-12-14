const Cafeteria=require('../schemas/cafeteria');
var express = require('express');
var router = express.Router();

/*모든 식당 가져오기 */
router.get('/getAllCafeteria', async(req, res)=> {
    console.log("들어와")
    try{
        const list=await Cafeteria.find({});
        res.json({list:list})
    }catch(err){
        console.log(err);
        res.json({message:false})
    }

});

/*추천된 식당 가져오기 */
router.post('/getRecomCafeteria/', async(req, res)=> {
    const spicy=req.body.spicy;
    const soup=req.body.soup;
    const price=req.body.price;

    try{
        if(spicy ==""&&soup==""&&price==""){
            const list=await Cafeteria.find({});
            res.json({list:list})
        }else if(spicy==""&&soup==""){
            const list=await Cafeteria.find({price:{$lte: price}});
            res.json({list:list})
        }else if(spicy==""&&price==""){
            const list=await Cafeteria.find({hasSoup:soup});
            res.json({list:list})
        }else if(soup==""&&price==""){
            const list=await Cafeteria.find({isSpicy:spicy});
            res.json({list:list})
        }else if(spicy==""){
            const list=await Cafeteria.find({hasSoup:soup,price:{$lte: price}});
            res.json({list:list})
        }else if(soup==""){
            const list=await Cafeteria.find({isSpicy:spicy,price:{$lte: price}});
            res.json({list:list})
        }else if(price==""){
            const list=await Cafeteria.find({isSpicy:spicy,hasSoup:soup});
            res.json({list:list})
        }else{
            const list=await Cafeteria.find({isSpicy:spicy,hasSoup:soup,price:{$lte: price}});
            res.json({list:list})
        }

    }catch(err){
        console.log(err);
        res.json({message:false})
    }

});

/*식당 예약하기 */
router.post('/finishEat/', async(req, res)=> {

    console.log("time"+req.body.time)
    try {
        await Cafeteria.update(
          { _id: req.body._id },
          {
            $set: {
              isReserve:false   
            }
          }
        );
        res.json({ message: "식사 완료가 되었습니다." });
      } catch (err) {
        console.log(err);
        res.json({ message: false });
      }

});

/*식사 완료하기 */
router.post('/ReserveCafeteria/', async(req, res)=> {

    console.log("time"+req.body.time)
    try {
        await Cafeteria.update(
          { cafeterianame: req.body.name },
          {
            $set: {
              isReserve:true,
              time_come:req.body.time,
              people_come:req.body.people    
            }
          }
        );
        res.json({ message: "메뉴 평가가 되었습니다." });
      } catch (err) {
        console.log(err);
        res.json({ message: false });
      }

});

/*예약된 cafeteria list 가져오기*/
router.get('/getReserveCafeteria/', async(req, res)=> {
    
    try{
        const list=await Cafeteria.find({isReserve:true});
        res.json({list:list})
    }catch(err){
        console.log(err);
        res.json({message:false})
    }

});

router.post('/', async(req, res, next) =>{
    try{
        let obj;

        obj={
            cafeterianame:req.body.cafeterianame,
            isSpicy:req.body.isSpicy,
            hasSoup:req.body.hasSoup,
            price:req.body.price,
            url:req.body.url,
            isReserve:req.body.isReserve,
            people_come:req.body.people_come,
            time_come:req.body.time_come
        }

        const cafeteria=new Cafeteria(obj);
        await cafeteria.save();
        res.json({ message: "식당이 저장되었습니다." });

    } catch(err){
        console.log(err);
        res.json({ message: false });
    }

});

module.exports = router;
