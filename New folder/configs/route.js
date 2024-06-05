const router = require('express').Router();

//#region Posts Component 

const PostsComponent = require('../components/posts.component');
const Posts = new PostsComponent();

// แสดงข้อมูล หลาย row
router.get('/posts', (req, res) => res.sendAsyncApi(Posts.selectAll()));
// แสดงข้อมูลแค่ row เดียว
router.get('/posts/:id', (req, res) => res.sendAsyncApi(Posts.selectOne(req.params.id)));
//เพิ่มข้อมูล
router.post('/posts',(req,res) => res.sendAsyncApi(Posts.create(req.body)))
//แก้้ไขข้อมูล
router.put('/posts/:id',(req,res) => res.sendAsyncApi(Posts.update(req.params.id,req.body)))
//ลบข้อมูล
router.delete('/Posts/:id',(req,res) => res.sendAsyncApi(Posts.delete(req.params.id)));
// การบ้าน
// เพิ่มรูปภาพ
router.post('/posts/image',(req,res) => res.sendAsyncApi(Posts.addImage(req.body)));
// เปลี่ยนรูปภาพ
// ลบรูปภาพ
// ส่งค่าrouterออก
module.exports = router;