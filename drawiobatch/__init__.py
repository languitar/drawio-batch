#!/usr/bin/env python3

import argparse
import os.path
import pkg_resources
import shutil
import subprocess
import tempfile


def parse_arguments():
    parser = argparse.ArgumentParser(
        description='Converts draw.io XML files to image formats')

    parser.add_argument(
        "-f", "--format",
        default="pdf",
        # from phantomjs: http://phantomjs.org/api/webpage/method/render.html
        choices=['pdf', 'gif', 'png', 'jpeg', 'bmp', 'ppm'],
        help="the image format to generate")

    def quality(arg):
        try:
            value = int(arg)
            if value < 0 or value > 100:
                raise argparse.ArgumentTypeError(
                    "{} is not in range (0, 100)".format(value))
            return value
        except ValueError as error:
            raise argparse.ArgumentTypeError("Not an integer")
    parser.add_argument(
        "-q", "--quality",
        # from phantomjs: http://phantomjs.org/api/webpage/method/render.html
        default=75,
        type=quality,
        help="Output image quality for JPEG and PNG")

    parser.add_argument(
        "-s", "--scale",
        default=1,
        type=float,
        help="Scales the output file size for pixel-based output formats")

    phantomjs = shutil.which("phantomjs")
    parser.add_argument(
        "-j", "--phantomjs",
        type=argparse.FileType(),
        default=phantomjs,
        required=phantomjs is None,
        help="The phantomjs executable to use")

    parser.add_argument(
        "input",
        type=argparse.FileType('r'),
        help="The XML file to process")
    parser.add_argument(
        "output",
        type=argparse.FileType('wb'),
        help="The output file to generate")

    args = parser.parse_args()

    return args


def get_resource(name):
    try:
        with open(os.path.join(
                os.path.dirname(os.path.relpath(__file__)),
                name), 'rb') as resource_file:
            return resource_file.read()
    except:
        return pkg_resources.resource_stream(
            'drawiobatch', name).read()


def main():
    args = parse_arguments()

    with tempfile.TemporaryDirectory() as temp_dir:
        backend = os.path.join(temp_dir, 'backend.html')
        with open(backend, 'wb') as backend_file:
            backend_file.write(get_resource('backend.html'))

        frontend = os.path.join(temp_dir, 'frontend.js')
        with open(frontend, 'wb') as frontend_file:
            in_data = get_resource('frontend.js.in')
            in_data = in_data.replace(b'@FILE@',
                                      bytearray("'" + backend + "'", 'ASCII'))
            frontend_file.write(in_data)

        command = [args.phantomjs.name, frontend,
                   args.format,
                   str(args.scale),
                   str(args.quality)]
        output_data = subprocess.check_output(
            command,
            stdin=args.input)

        args.output.write(output_data)
        args.output.close()


if __name__ == '__main__':
    main()
