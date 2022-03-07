const { observable } = require('mobx');

const userStore = observable({
    isLogginIn: false,
    data: null,
    logIn(data) {
        this.isLogginIn = true;
    }
})

const postStore = observable({
    data: [],
    addPost(data) {
        this.data.push(data);
    }
});

export { userStore, postStore };