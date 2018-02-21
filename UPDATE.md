# Update instructions

## drawio remote (onetime setup)

    git remote add drawio https://github.com/jgraph/drawio.git

## Version bump

    git fetch rawio
    git subtree -d pull -P "drawiobatch/drawio" --squash -- drawio vXXXX
    git tag $(cat drawiobatch/drawio/VERSION)
    git push origin master $(cat drawiobatch/drawio/VERSION)
