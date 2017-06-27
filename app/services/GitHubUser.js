var aixos =  require('axios');

var GitHubUser = {
    getByUsername: function(username){
        return aixos.get('https://api.github.com/users/' + username);
    },

    getReposByUsername: function(username){
        return aixos.get('https://api.github.com/users/' + username + '/repos');
    }
}

module.exports = GitHubUser;