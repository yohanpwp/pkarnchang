const validate = require('validate.js');
const database = require('../configs/database')

class PostsComponent {
    constructor(valid = validate,db = database.MySqlDatabase) {
        //ใช้งาน Database
        this._database = new db ();
        //สร้าง Validate
       this._validate = valid;
       this._validate.validators.presence.message = 'ห้ามเป็นคำว่าง';
       this._validate.validators.format.message = 'ไม่ตรงกับรูปแบบที่กำหนด';
       this._validate.validators.numericality.message = 'ต้องเป็นตัวเลขเท่านั้น';
       this.validate_rules = {
            post_image: {presence: {allowEmpty: false},format: /(https?:\/\/.*\.(?:png|jpg))/i
                },post_category: {presence: {allowEmpty: false}
                    },post_name: {presence: {allowEmpty: false}
                    }
    }};

    //แสดงข้อมุลทั้งหมด

    selectAll() {
        return this._database.query('SELECT * FROM db_test.posts');
    }

    //แสดงข้อมูลเดียว

    async selectOne(id) {
        const errors = this._validate({id}, {id: {numericality: true}});
        if  (errors) throw {errors};
        const items = await this._database.query('SELECT * FROM db_test.posts where id=?',[id]);
        return items.length == 0 ?null : items[0] ;
        // return new Promise((resolve, reject) => {
        //     if(errors) return reject ({errors});
        //     resolve({id});
        // });
    }

    // เพิ่มข้อมูลใหม่
    async create(value) {
        try {
            const errors = this._validate(value, this.validate_rules);
            if (errors) throw {errors};
            const item = await this._database.query('insert into posts value(0, ?, ?, ?, ?,now())', [
                value.post_image ,
                value.post_category ,
                value.post_name ,
                value.post_detail 
            ]);
            const data = await this.selectOne(item.insertId)
            return data ;
            
        } catch (error) {
            console.log(error)
        }
        
    }

    //แก้ไขข้อมูล
    async update(id,value) {
        const errors = this._validate(value,this.validate_rules);
        const errorsid = this._validate({id}, {id: {numericality: true}});
        if(errors || errorsid) throw {errors : errorsid || errors};
        await this._database.query('update posts set post_image = ?,post_category = ?,post_name = ?,post_detail = ?,post_date = now() where id = ?', [         
                value['post_image'] ,
                value['post_category'] ,
                value['post_name'] ,
                value['post_detail'] ,
                id
        ]);
        return await this.selectOne(id);
    }
    //ลบข้อมูล
    async delete(id) {
        const errors = this._validate({id}, {id: {numericality: true}});
        if(errors) throw reject ({errors});
        this._database.query('delete from posts where id = ?', [id]);
        return await this.selectOne()};
};

module.exports = PostsComponent;