import os.path
from setuptools import setup, find_packages

def read_version():
    with open('drawio/VERSION') as version_file:
        return version_file.readlines()[0].strip()

setup(
    name='drawio-batch',
    version=read_version(),
    author='Johannes Wienke',
    author_email='languitar@semipol.de',
    description='A command line converter for draw.io diagrams',
    license='LGPL',

    packages=find_packages(),

    package_data={
        '': ['backend.html', 'frontend.js.in']
    },

    entry_points={
        'console_scripts': [
            'drawio-batch = drawiobatch:main',
        ]
    },
)
