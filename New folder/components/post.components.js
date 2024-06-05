class PostsComponent {

    selectAll() {
        return new Promise((resolve,reject) => {
            reject({Error: 'data invalid'});
        });
    }

    selectOne(id) {
        return new Promise((resolve,reject) => {
            resolve({ id });
        });
    }
}
module.exports = PostsComponent ;