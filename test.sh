#!/bin/bash

set -e
set -x

rm test.pdf || true
rm test.png || true
rm test.svg || true

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

# check external images work
node drawio-batch.js -d 1 ./test/images.xml test.pdf
# if that doesn't work, the PDF is much smaller because no images are embedded
test "$(stat --printf='%s' test.pdf)" -ge 4000
rm test.pdf

# check SVG export
node drawio-batch.js ./drawio/src/main/webapp/templates/uml/uml_1.xml test.svg
file test.svg | grep 'Scalable Vector Graphics'
rm test.svg

# check SVG export with inline HTML
# must no produce error output
if [ -n "$(node drawio-batch.js ./test/inline-html.xml test.svg 2>&1)" ]
then
    exit 1
fi
file test.svg | grep 'Scalable Vector Graphics'
rm test.svg
