#!/bin/bash

set -e
set -x

rm test.pdf || true
rm test.png || true

# check general conversion
node drawio-batch.js ./drawio/src/main/webapp/templates/uml/uml_1.xml test.pdf
file test.pdf | grep 'PDF document'
rm test.pdf

# check bound handling
node drawio-batch.js -b 200x350 ./drawio/src/main/webapp/templates/uml/uml_1.xml test.png
file test.png | grep 'PNG image data, 200 x'
rm test.png

# check diagram id handling
node drawio-batch.js ./test/multipleSheets.xml test.pdf
pdftotext test.pdf - | grep BoxOnSheetOne
rm test.pdf

node drawio-batch.js -d 0 ./test/multipleSheets.xml test.pdf
pdftotext test.pdf - | grep BoxOnSheetOne
rm test.pdf

node drawio-batch.js -d 1 ./test/multipleSheets.xml test.pdf
pdftotext test.pdf - | grep BoxOnSheetTwo
rm test.pdf
