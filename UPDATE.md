# Update instructions

## drawio remote (onetime setup)

    git remote add drawio https://github.com/jgraph/drawio.git

## Version bump

    git fetch drawio
    git subtree -d pull -P "drawio" --squash -- drawio vXXXX
    sed -i'' 's/"version": ".*"/"version": "'$(cat drawio/VERSION)'"/' package.json
    npm update
    git add package.json package-lock.json
    git commit -m "Version bump to "$(cat drawio/VERSION)
    git tag $(cat drawio/VERSION)
    git push origin master $(cat drawio/VERSION)
