// REQUIRING PACKAGES
const gm = require('gm')
const fs = require('fs')
const util = require('util')

// FOR PROCESSING THE IMAGE
const ProcessImage = options => {
    return new Promise((resolve, reject) => {
        let { srcFile, width, height, destFile } = options
        gm(srcFile)
            .resize(width, height)
            .gravity('center')
            .quality(100)
            .extent(100, 100, "!")         // COMMENT THIS LINE IF IMAGE IS NOT 100X100
            .write(destFile, err => {
                err ? reject(err) : resolve('Processed!!')
            })
    })
}

// CONVERTING CALLBACKS INTO PROMISES
const read = util.promisify(fs.readdir)
const dlt = util.promisify(fs.unlink)

// FOR DELETING CONTENTS OD ANY FOLDER
const DeleteFolder = folder => {
    return new Promise((resolve, reject) => {
        read(folder)
            .then(items => {
                items.map(item => {
                    dlt(folder+item)
                        .then(s => resolve('Deleted!') )
                        .catch(e => reject(e) )
                })
            })
            .catch(err => reject(err) )
    })
}

// EXPORTING THEM
module.exports = {
    ProcessImage,
    DeleteFolder
}