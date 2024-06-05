const assert = require('assert');
const PostsComponent = require('../components/posts.component');

describe('ทดสอบการทำงานของ PostsComponent', () => {

    var component = new PostsComponent();
    beforeEach(() => component = new PostsComponent(
        require('validate.js'),
        class {
            constructor() {
                this.items = [{
                    id: 1,
                    post_image: 'https://www.thairath.co.th/media/CiHZjUdJ5HPNXJ92GO23O1QNu0RloV4jY5.jpg',
                    post_category: 'เมนูอาหาร 1',
                    post_name: 'เมนูอาหาร อาหารไทยง่ายๆ',
                    post_detail: 'เมนูอาหาร อาหารไทยง่ายๆ ทำกินเองที่บ้านได้ กับข้าว อาหารไทยมีอะไรบ้าง รวมสูตรอาหาร เมนูต้ม เมนูผัด เมนูแกง เมนูทอด เมนูนึ่ง เมนูปิ้งย่าง เมนูหมู เมนูปลา เมนูไก่ เมนูปลาหมึก เมนูกุ้ง เมนูหอย อาหารไทย คือ อาหารประจำชาติไทย เอกลักษณ์วัฒนธรรมการกินจากอดีตสู่ปัจจุบัน อาหารของไทย วัฒนธรรมประจำชาติที่สำคัญของประเทศไทย',
                    post_date: new Date()
                },
                {
                    id: 2,
                    post_image: 'https://www.thairath.co.th/media/CiHZjUdJ5HPNXJ92GO23O1QNu0RloV4jY5.jpg',
                    post_category: 'เมนูอาหาร 2',
                    post_name: 'เมนูอาหาร อาหารไทยง่ายๆ',
                    post_detail: 'เมนูอาหาร อาหารไทยง่ายๆ ทำกินเองที่บ้านได้ กับข้าว อาหารไทยมีอะไรบ้าง รวมสูตรอาหาร เมนูต้ม เมนูผัด เมนูแกง เมนูทอด เมนูนึ่ง เมนูปิ้งย่าง เมนูหมู เมนูปลา เมนูไก่ เมนูปลาหมึก เมนูกุ้ง เมนูหอย อาหารไทย คือ อาหารประจำชาติไทย เอกลักษณ์วัฒนธรรมการกินจากอดีตสู่ปัจจุบัน อาหารของไทย วัฒนธรรมประจำชาติที่สำคัญของประเทศไทย',
                    post_date: new Date()
                }]
            }

            /**
             * 
             * @param {string} sql 
             * @param {any} params 
             */
            query(sql, params = null) {
                return new Promise((resolve, reject) => {
                    const query = sql.toLowerCase();
                    if (query.indexOf('select') >= 0) {
                        if (params == null)
                            resolve(this.items);
                        else resolve(this.items.filter(m => m.id == params[0]));
                    }
                    else if (query.indexOf('insert') >= 0) {
                        const item = {
                            id: Math.random(),
                            post_image: params[0],
                            post_category: params[1],
                            post_name: params[2],
                            post_detail: params[3],
                            post_date: new Date()
                        };
                        this.items.push(item);
                        resolve({ insertId: item.id });
                    }
                    else if (query.indexOf('update') >= 0) {
                        this.items.map(m => {
                            if (m.id == params[4]) {
                                m.post_image = params[0];
                                m.post_category = params[1];
                                m.post_name = params[2];
                                m.post_detail = params[3];
                                m.post_date = new Date();
                            }
                            return m;
                        });
                        resolve();
                    }
                    else if (query.indexOf('delete') >= 0) {
                        this.items.splice(this.items.findIndex(m => m.id == params[0]), 1);
                        resolve({});
                    }
                });
            }
        }
    ));

    it('ต้องมี Function selectAll', () => {
        assert.equal(typeof component.selectAll, 'function');
    });

    it('ต้องมี Function selectOne', () => {
        assert.equal(typeof component.selectOne, 'function');
    });

    it('ต้องมี Function create', () => {
        assert.equal(typeof component.create, 'function');
    });

    it('ต้องมี Function update', () => {
        assert.equal(typeof component.update, 'function');
    });

    it('ต้องมี Function delete', () => {
        assert.equal(typeof component.delete, 'function');
    });

    it('Function selectAll ต้องทำงานถูกต้อง', async () => {
        const items = await component.selectAll();
        assert.equal(items.length, 2);
    });

    it('Function selectOne ต้องทำงานถูกต้อง', async () => {
        const item = await component.selectOne(2);
        assert.equal(item.post_category, 'เมนูอาหาร 2');
    });

    it('Function create ต้องทำงานถูกต้อง', async () => {
        const item = await component.create({
            post_image: 'https://www.thairath.co.th/media/CiHZjUdJ5HPNXJ92GO23O1QNu0RloV4jY5.jpg',
            post_category: 'Test post_category',
            post_name: 'Test post_name',
            post_detail: 'Test post_detail'
        });
        const items = await component.selectAll();
        assert.equal(items.length, 3);
    });

    it('Function update ต้องทำงานถูกต้อง', async () => {
        const item = await component.update(2, {
            post_image: 'https://www.thairath.co.th/media/CiHZjUdJ5HPNXJ92GO23O1QNu0RloV4jY5.jpg',
            post_category: 'เมนูอาหารแก้ไขใหม่นะครับ',
            post_name: 'Test post_name',
            post_detail: 'Test post_detail'
        });
        assert.equal(item.post_category, 'เมนูอาหารแก้ไขใหม่นะครับ');
    });

    it('Function update ต้องทำงานถูกต้อง', async () => {
        await component.delete(2);
        const items = await component.selectAll();
        assert.equal(items.length, 1);
    });
});