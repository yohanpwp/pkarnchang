const assert = require('assert');
const PostsComponent = require('../components/posts.component');

describe('ทดสอบการทำงานของ PostsComponent', () => {
    var component = new PostsComponent() ;

    it ('ต้องมี Function select all', () => {
        assert.equal(typeof component.selectAll,'function');
    });
    it ('ต้องมี Function select one', () => {
        assert.equal(typeof component.selectOne,'function');
    });
    it ('ต้องมี Function create', () => {
        assert.equal(typeof component.create,'function');
    });
    it ('ต้องมี Function update', () => {
        assert.equal(typeof component.update,'function');
    });
    it ('ต้องมี Function delete', () => {
        assert.equal(typeof component.delete,'function');
    });
});