/*
1. Create a file named promises.js inside of your js directory and link it to an HTML file of your choice.
2. Generate a Personal Access Token for the GitHub API.
   We will use this so that we don't get rate limited when talking to the GitHub API. You can add the token to your requests like this:
   fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})
3. Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user     made. Reference the github api documentation to achieve this.*/

// function gitFetch() {
//
// }

fetch("https://api.github.com/", {headers: {'Authorization': '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'}})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

getGit();
function getGit() {
    fetch('https://api.github.com/users/islayah/events')
        .then(response => response.json())
        .then(data => {
            // 1st console log is helpful to see the data/make sure it works
            console.log(data);
            // **** Remember index 0 *****
            console.log(data[0].created_at);
            console.log(data[0].payload.commits[0].message);
        });
};