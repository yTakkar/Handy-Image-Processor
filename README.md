# Handy-Image-Processor

A handy, simple & useful Image Processor for NodeJS with very simple API.

# Requirements
1. [gm](http://aheckmann.github.io/gm/)
2. fs
3. util

# Usage

First install it.

```
npm install handy-image-processor
```
or
```
yarn add handy-image-processor
```

Then here's the fun part!!
```javascript
// Import
const Processor = 'handy-image-processor'

// For processing
Processor.ProcessImage(options:Object):String||Error
options = {
    srcFile,    // Image source      [eg. './src/image.gif']
    width,      // width you want    [eg. 100]
    height,     // height you want   [eg. 100]
    destFile:   // Image destination [eg. './dest/'+ new Date().getTime() +'.png']
}

// For deleting all the files of any given folder
Processor.DeleteFolder(folder:String):String||Error
```

To make the API more useful, [visit](http://aheckmann.github.io/gm/) & go through given options!!