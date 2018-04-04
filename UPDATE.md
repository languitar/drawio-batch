# Update instructions

## drawio remote (onetime setup)

    git remote add drawio https://github.com/jgraph/drawio.git

## Version bump

    git fetch rawio
    git subtree -d pull -P "drawio" --squash -- drawio vXXXX
    sed -i'' 's/"version": ".*"/"version": "'$(cat drawio/VERSION)'"/' package.json
    git add package.json
    git commit -m "Version bump to "$(cat drawio/VERSION)
    git tag $(cat drawio/VERSION)
    git push origin master $(cat drawiobatch/drawio/VERSION)
