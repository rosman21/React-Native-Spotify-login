module.exports = {
    authSpotify: function(req, res){
        // The request will be redirected to spotify for authentication, so this
        // function will not be called.
    },
    spotifyCallback: function(req, res) {
        if(req.user){
            return res.status(200).json({
                user: req.user
            });
        }
        if(!req.user){
            return res.status(200).json({
                user: false
            });
        }
    },
    spotifyLogout: function(req, res){
        req.logout();
        return res.status(200).json({
            status: true,
            message: "User logged out"
        });
    },

    authStatus: function(req,res){
        if (req.isAuthenticated()) { 
            return res.status(200).json({
                status: true,
                user: req.user
            });
         }
         if (!req.isAuthenticated()) { 
            return res.status(200).json({
                status: false,
                user: false
            });
         }
    }
}