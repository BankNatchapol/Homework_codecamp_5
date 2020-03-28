function makeUser() {
    return {
        name: "John",
        ref: this
    };
};

let user = makeUser();

alert(user.ref.name); // What's the result?

