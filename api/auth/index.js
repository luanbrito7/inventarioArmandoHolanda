var firebase = require('firebase')

let auth = {}

auth.getUser = () => {
    var user = firebase.auth().currentUser
    console.log(user)
    if (user) {
        return user
    }
}

auth.register = ({email, password}) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        error ? console.log(error.message) : console.log('success')
        console.log(error)
        if (!error) {
            let user = firebase.auth().currentUser
            user.sendEmailVerification().then( _ => {
                console.log('Confirm your email')
              }).catch(function(error) {
                console.log(error)
              });
        }
    })
}

auth.login = ({email, password}) => {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        error ? console.log(error.message) : console.log('success')
        if (!error) {
            return auth.getUser()
        }
    })
}

module.exports = auth