# COMMIT HISTORY API

## Description

An app that shows git commit history on the same project you are working on. 

This application includes the CLIENT and the SERVER as you can see inside the commitHistoryAPI folder.
## How to run the project?
<br>
To run the SERVER you must ensure that you are inside the SERVER folder. Once you are inside, follow the steps below:

<br><br>


1. Open your Terminal & Run command 'yarn' to install all the dependencies.

2. Run this command to start the server 'yarn dev'.

<br><br>
Then to run the CLIENT you need to make sure you are inside the CLIENT/commit_history_client folder. Once iOnce you are inside, perform the following steps

<br><br>


1. Open your Terminal & Run command 'yarn' to install all the dependencies.

2. Run this command to start the client 'yarn start'.


<br>

## Using the app
<br>
To get the list of commits for this project, you need to either pass an OAuth token from github on the client home page (I'll email you my OAuth token, because GitHub doesn't support tokens in public repositories), or you can use the Postman API or other platform, you need to pass authorization in headers like this:

<br><br>

**Authorization: token {OAuthToken}**
