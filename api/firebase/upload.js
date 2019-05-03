const uuid = require('uuid/v4')
const firebase = require('firebase')
const storage = firebase.storage()

let firebaseConn = {}

firebaseConn.IMAGE = 'IMAGE'

firebaseConn.upload = async (buffer, type, name = null) => {
    let folder = " "
    folder = type == firebaseConn.IMAGE ?
        firebaseConn.IMAGE.toLocaleLowerCase()
        : 'default'

    let fileName = name
    if (fileName == null) {
        fileName = await uuid()
    }

    console.log(fileName)
    
    const firebasePath = `${folder}/${fileName}`
    const imageRef = await storage.ref(firebasePath).put(buffer)

    return {
        url: imageRef.downloadURL,
        fileName,
        type,
        firebasePath
    }
}

module.exports = firebaseConn