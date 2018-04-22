const { ProcessImage, DeleteAllOfFolder } = require('./index')
const { join } = require('path')
const gm = require('gm')

describe('Sweet tests', () => {

  it('should process the given image', async () => {
    let p = await ProcessImage({
      srcFile: join(__dirname, '/src/image-music.jpg'),
      width: 200,
      height: 200,
      destFile: join(__dirname, '/dist/image.png'),
    })
    expect(p).toBe('Processed!!')
  })

  it('Created image should have dimension of 175x200', async () => {
    gm(join(__dirname, '/dist/image.png'))
      .size((err, size) => {
        if (size) {
          expect(size.width).toBe(175)
          expect(size.height).toBe(200)
        }
      })
  })

  it('should delete all the files of a given folder', async () => {
    let d = await DeleteAllOfFolder(
      join(__dirname, '/dist')
    )
    expect(d).toBe('Deleted!!')
  })

})
