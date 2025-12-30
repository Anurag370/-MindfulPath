# Instruction
## Conect to this repo
    git config --global user.name 'YOUR_NAME'
    git config --global user.email 'YOUR_EMAIL'
    git init
    git pull https://github.com/Anurag370/-MindfulPath.git
## Create your own branch
    git branch branch_name
    git push -u origin branch_name
## Shift to your branch
    git checkout branch_name
## Upload
Always commit your chanegs to the main repo after completion for your taks or saving your changes made.<br>
**WARNING**: Check before adding that you are on your branch

    git add .
    git commit -m "Message"
    git push
---
**Allways update the codebase using pull before starting your work.**
## For Frontend Dev
Run this commands always after pulling the codebase.

    npm install
To install all dependcies.
## For Backend Dev

Run this commands once.

    pip install uv

Run this commands always after pulling the codebase.

    uv add

If you want to install and ecternal moudule use uv:

    uv add moudule_name

**Also make a list of modules you are using or downloding in Requiremwnts.txt**
