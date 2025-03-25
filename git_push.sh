#!/bin/bash

# verify ssh
eval $(ssh-agent -s)
ssh-add ~/.ssh/portfolioContainerized

git pull portfolioContainerized main

# Add new changes
read -p "Commit :" commit
git add .
git commit -m $commit
git push portfolioContainerized main
