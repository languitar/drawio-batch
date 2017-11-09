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
    license='Apache',

    packages=find_packages(),

    package_data={
        '': ['backend.html', 'frontend.js.in']
    },

    entry_points={
        'console_scripts': [
            'drawio-batch = drawiobatch:main',
        ]
    },

    classifiers=[
        'License :: OSI Approved :: Apache Software License',
        'Development Status :: 3 - Alpha',
        'Environment :: Console',
        'Intended Audience :: Developers',
        'Intended Audience :: Information Technology',
        'Intended Audience :: Science/Research',
        'Intended Audience :: System Administrators',
        'Programming Language :: Python :: 3 :: Only',
        'Programming Language :: JavaScript',
        'Topic :: Multimedia :: Graphics',
    ],
)
