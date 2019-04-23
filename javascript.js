function Apple() {
    this.weightApp = 10;
    this.getWeightApp = function () {
        return this.weightApp;
    };
    this.decreaseApple = function () {
        if (this.weightApp > 0) {
            this.weightApp--;
        }
    };
}

function Human(name, gender, weightHuman) {
    this.name = name;
    this.gender = gender;
    this.weightHuman = weightHuman;
    this.weightApp = 10;
    this.getAppleInfo = function (apple) {
        return this.weightApp = apple.weightApp;
    };
    this.eatApple = function (apple) {
        this.weightApp = apple.decreaseApple();
    };
    this.setTalk = function (new_message) {
        this.message = new_message;
    };
    this.getTalk = function () {
        return this.message;
    };
    this.getName = function () {
        return this.name;
    };
    this.getGender = function () {
        return this.gender;
    };
    this.setWeightHuman = function () {
        this.weightHuman = weightHuman++;
    };
    this.getWeightHuman = function () {
        return this.weightHuman = weightHuman;
    }
}

let apple1 = new Apple();
console.log(apple1.getWeightApp());
let human1 = new Human("yuki", "female", 50);
let human2 = new Human("teppei", "male", 60);
console.log(human1.getName());
human1.setTalk("hello! teppei");
console.log(human1.getTalk());
console.log(human2.getName());
human2.setTalk("hello! yuki");
console.log(human2.getTalk());

while (apple1.weightApp!==0){
    human1.eatApple(apple1);
    human1.setWeightHuman();
    console.log(human1.getWeightHuman());
    console.log(human1.getAppleInfo(apple1));

    human2.eatApple(apple1);
    human2.setWeightHuman();
    console.log(human2.getWeightHuman());
    console.log(human2.getAppleInfo(apple1));
}
console.log("Het tao");






