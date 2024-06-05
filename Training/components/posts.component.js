const validate = require('validate.js');
const database = require('../configs/database');

class PostsComponent {
    constructor(valid = validate, db = database.MySqlDatabase) {
        // ใช้งาน Database
        this._database = new db();
        // สร้าง Validate
        this._validate = valid;
        this._validate.validators.presence.message = 'ห้ามเป็นค่าว่าง';
        this._validate.validators.format.message = 'ไม่ตรงกับรูปแบบที่กำหนด';
        this._validate.validators.numericality.message = 'ต้องเป็นตัวเลขเท่านั้น';
        this.validate_rules = {
            post_image: {
                presence: {
                    allowEmpty: false
                },
                format: /(https?:\/\/.*\.(?:png|jpg))/i
            },
            post_category: {
                presence: {
                    allowEmpty: false
                }
            },
            post_name: {
                presence: {
                    allowEmpty: false
                }
            }
        };
    }

    // แสดงข้อมูลทั้งหมด
    selectAll() {
        return this._database.query('select * from posts');
    }

    // แสดงข้อมูลแค่ข้อมูลเดียว
    async selectOne(id) {
        const errors = this._validate({ id }, { id: { numericality: true } });
        if (errors) throw { errors };
        const items = await this._database.query('select * from posts where id=?', [id]);
        return items.length == 0 ? null : items[0];
    }

    // เพิ่่มข้อมูลใหม่
    async create(value) {
        const errors = this._validate(value, this.validate_rules);
        if (errors) throw { errors };
        const item = await this._database.query('insert into posts value(0, ?, ?, ?, ?, now())', [
            value['post_image'],
            value['post_category'],
            value['post_name'],
            value['post_detail']
        ]);
        return await this.selectOne(item.insertId);
    }

    // แก้ไขข้อมูล
    async update(id, value) {
        const errors = this._validate(value, this.validate_rules);
        const errorsId = this._validate({ id }, { id: { numericality: true } });
        if (errors || errorsId) throw { errors: errorsId || errors };
        await this._database.query(`
            update posts set 
                post_image = ?, 
                post_category = ?,
                post_name = ?,
                post_detail = ?,
                post_date = now()
            where id = ?`, [
                value['post_image'],
                value['post_category'],
                value['post_name'],
                value['post_detail'],
                id
            ]);
        return await this.selectOne(id);
    }

    // ลบข้อมูล
    async delete(id) {
        const errors = this._validate({ id }, { id: { numericality: true } });
        if (errors) throw { errors };
        return await this._database.query('delete from posts where id=?', [id]);
    }

}

module.exports = PostsComponent;