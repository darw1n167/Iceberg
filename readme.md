# Dev usage

1. Create a new branch for the component you are creating
1. Clone the repo to your local repo:
```
$ git clone https://github.com/Titanic-MCSP-18/Iceberg.git
```
3. Ensure you are working within your component branch:



View all branches:
```
$ git branch -v
```



If there is no branch for your component:
```
$ git branch [your branch name]
```



Switch to your branch:
```
$ git checkout [your branch name]
```



Updating your branch:
```
$ git fetch
$ git checkout [your branch name]
$ git merge origin/[your branch name]
```


Ensure clean working tree:
```
$ git status
```


# Running

Upon cloning the repo, intall dependencies:

From BOTH the iceberg and server folder, run the following command:
```
$ npm i
```

From the server folder, run the following command to start the server and client:
```
$ npm run dev
```