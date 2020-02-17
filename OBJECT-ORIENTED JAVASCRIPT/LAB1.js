class UserTemplate {
    constructor(name, password, age) {
        this.name = name;
        this.password = password;
        this.age = age;
        this.connected = false;
        this.date = new Date();
    }

    login() {
        this.connected = true;
        this.checkStatus();
    }

    logout() {
        this.connected = false;
        this.checkStatus();
    }

    checkStatus() {
        console.log('your login status :', this.connected);
    }
}