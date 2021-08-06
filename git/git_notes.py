# the way to create a git repository is with the command git init
# git init is the start of the entire git process that is going to initialize a 
# new repo inside of this directory. its important that you are located in the 
# directory that you want to create the repo.
# you want to be at the root of the project.
# after you pass in git init the terminal will show you the path as to where its located.
# at the end of our path (/Users/newguest/Desktop/my-git-project/.git/) we see
# .git which is not displayed on the path shown on the terminal and if we pass our 
# ls command we see nothing, what it means is that our directory is hidden. 
# ls -la will show you the hidden files. git status will show you where you are in 
# the process of finishing your git repo. 
# git add . allows us to add all our files in the directory, git add followed by our file name
# adds the file alone. however this is simply lets git know about the file, its no longer 
# just an untracked file we are working on that it doesnt know about. so in order to fullfill
# the process of add we have to git commit the file.
# this set of steps creates a local repo only, does not push it online
# 
# 
# when creating repo on git hubs page, although it says create repo, its actually more so like
# a container for it. its like the visual representation of what we are actually going to push
# up to it which is the git repo. we are creating a hub for our git repo
# so following were we left off, committing our file, we begin to breakdown the next two steps
# by element. we start with our git command, which is not specific to github, the only thing that is specific
# to them is the final part which is the url that were going to be pushing up
# the next two elements are the words remote and add. that means that our local repo
# lives on our own cpu and what we want to do is add a connection to a remote repo
# as in github, serving as our centralizeds repo which we are attempting to connect to
# next element is origin which represents the named remote. what origin does is this is the default name
# and its the best practice name that youre going to use for whatever git hosting provider
# the SSH ones is what you can use if youve already added your SSH keys.
# so we pass the path given to us by gitHub: git remote add origin git@github.com:mcast2185/devProject.git
# so we have this git remote connection, we have origin for git at github
# the reason why we have two of them is because you need to be able to push to that remot
# repo so thats whenever your making changes and your pushing up those changes up to github and then you also need 
# the ability to fetch, fetching is where you bring the changes to your local machine

# git init
# git add new.py
# git commit -m "first commit"
# git branch -M main   # dont really need
# git remote add origin git@github.com:mcast2185/devProject.git
# git push -u origin main