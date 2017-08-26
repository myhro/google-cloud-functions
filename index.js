exports.ip = function ip(req, res) {
    var ua = req.headers['user-agent'].split("AppEngine")[0].trim();
    var content = ua + '\n\n' + req.ip + '\n';
    res.type('text/plain; charset=utf-8');
    res.status(200).send(content);
};
