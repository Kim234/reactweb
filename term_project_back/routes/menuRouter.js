const MenuforRate=require('../schemas/menuforRate');
var express = require('express');
var router = express.Router();

/*평가할 메뉴 리스트 가져오기 */
router.get('/getMenuforRate', async(req, res)=> {
    console.log("들어와")
    try{
        const list=await MenuforRate.find({isRate:false});
        res.json({list:list})
    }catch(err){
        console.log(err);
        res.json({message:false})
    }

});

/*평가한 메뉴 리스트 가져오기 */
router.get('/getMenuwithRate', async(req, res)=> {
    console.log("들어와2")
    try{
        const list=await MenuforRate.find({isRate:true});
        res.json({list:list})
    }catch(err){
        console.log(err);
        res.json({message:false})
    }
});

/*메뉴 평가 update */
router.post('/updateRate', async(req, res, next) =>{
    const id=req.body._id
    try {
        await MenuforRate.update(
          { _id: req.body._id },
          {
            $set: {
              isRate:true,
              rating:req.body.rating
            }
          }
        );
        res.json({ message: "메뉴 평가가 되었습니다." });
      } catch (err) {
        console.log(err);
        res.json({ message: false });
      }

});

/*rate할 식사 추가 */
router.post('/addRate', async(req, res, next) =>{
    try {
        await MenuforRate.update(
          { cafeteria_id: req.body.id },
          {
            $set: {
              isRate:false
            }
          }
        );
        res.json({ message: "메뉴 평가가 되었습니다." });
      } catch (err) {
        console.log(err);
        res.json({ message: false });
      }

});

router.post('/', async(req, res, next) =>{
    try{
        let obj;

        obj={
            menu_name:req.body.menu_name,
            isRate:req.body.isRate,
            rating:req.body.rating,
            url:req.body.url
        }

        const menuforRate=new MenuforRate(obj);
        await menuforRate.save();
        res.json({ message: "리뷰가 저장되었습니다." });

    } catch(err){
        console.log(err);
        res.json({ message: false });
    }

});

module.exports = router;
