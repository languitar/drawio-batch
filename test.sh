#!/bin/bash

set -e
set -x

rm test.pdf || true

# check general conversion
node drawio-batch.js ./drawio/src/main/webapp/templates/uml/uml_1.xml test.pdf
file test.pdf | grep 'PDF document'
rm test.pdf

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
