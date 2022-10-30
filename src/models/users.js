// models/users

class User {
    userId = Math.floor(Math.random());
    username = '';
    email = '';
    password = '';
    highScore = 0;
    lastSessionPoints = 0;
    isOnTop = false;

    constructor(userId, username, email, password, highScore, lastSessionPoints, isOnTop) {
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.password = password;
        this.highScore = highScore;
        this.lastSessionPoints = lastSessionPoints;
        this.isOnTop = isOnTop;
    }
}

module.exports = User;