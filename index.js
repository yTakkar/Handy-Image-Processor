// REQUIRING PACKAGES
const gm = require('gm')
const fs = require('fs')
const { promisify } = require('util')

/**
 * For processing the image
 *
 * @param {Object} options
 * @param {String} options.srcFile
 * @param {Number} options.width
 * @param {Number} options.height
 * @param {String} options.destFile
 * @param {Boolean} options.exact
 */
const ProcessImage = options => {
  return new Promise((resolve, reject) => {
    let { srcFile, width, height, destFile, exact } = options
    gm(srcFile)
      .resize(width, height)
      .gravity('center')
      .quality(100)
      .extent(width, height, exact ? '!' : '')
      .write(destFile, err => {
        err
          ? reject(err)
          : resolve('Processed!!')
      })
  })
}

// CONVERTING CALLBACKS INTO PROMISES
const read = promisify(fs.readdir)
const dlt = promisify(fs.unlink)

/**
 * For deleting all the contents of any folder
 * @param {String} folder
 */
const DeleteAllOfFolder = folder => {
  return new Promise((resolve, reject) => {
    read(folder).then(items => {
      items.map(item => {
        dlt(folder + item)
          .then(s => resolve('Deleted!'))
          .catch(e => reject(e))
      })
    }).catch(err => reject(err))
  })
}

// EXPORTING THEM
module.exports = {
  ProcessImage,
  DeleteAllOfFolder
}
