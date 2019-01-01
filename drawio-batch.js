#!/usr/bin/env node

'use strict'

var fs = require('fs')

const program = require('commander')

function parseQuality (val) {
  var number = parseInt(val)
  if (isNaN(number) || number <= 0 || number > 100) {
    throw new Error('Invalid quality value given')
  }
  return number
}

function parseScale (val) {
  var number = parseFloat(val)
  if (isNaN(number) || number <= 0) {
    throw new Error('Invalid scale value given')
  }
  return number
}

var input = null
var output = null

program
  .name('drawio-batch')
  .version(require('./package.json').version)
  .option('-f --format <format>',
    'ignored, for backwards compatibility. File type is determined from output extension',
    /^(pdf|gif|png|jpeg|bmp|ppm)$/, 'pdf')
  .option('-q --quality <quality>',
    'output image quality for JPEG and PNG (0..100)', parseQuality, 75)
  .option('-s --scale <scale>',
    'scales the output file size for pixel-based output formats', parseScale, 1.0)
  .option('-d --diagramId <diagramId>',
    'selects a specific diagram', parseInt, 0)
  .arguments('<input> <output>')
  .action(function (newInput, newOutput) {
    input = fs.readFileSync(newInput, 'utf-8')
    output = newOutput
  })
  .parse(process.argv)

const puppeteer = require('puppeteer')

function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox']})

  try {
    await input
    const page = await browser.newPage()

    await page.goto('file://' + __dirname + '/drawio/src/main/webapp/export3.html')

    await page.evaluate(function (xml, format, scale, diagramId) {
      return render({
        xml: xml,
        format: format,
        scale: scale,
        from: diagramId,
      })
    }, input, program.format, program.scale, program.diagramId)

    await page.waitForSelector('#LoadingComplete');
    var bounds = await page.mainFrame().$eval('#LoadingComplete', div => div.getAttribute('bounds'));
    var bounds = JSON.parse(bounds);

    var width = Math.ceil(bounds.x + bounds.width)
    var height = Math.ceil(bounds.y + bounds.height)

    await page.setViewport({width: width, height: height})

    if (output.split('.').pop().toLowerCase() === 'pdf') {
      await page.pdf({path: output, width: width, height: height + 1, pageRanges: '1'})
    } else {
      await page.screenshot({path: output, clip: bounds, quality: process.quality})
    }
  } catch (error) {
    console.log(error)
    process.exit(1)
  } finally {
    await browser.close()
  }
})()
