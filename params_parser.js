function parseParams(req) {
    var paramArray = [],
        parameters = {};
    if (req.url.indexOf("?") > 0) {
        var url_data = req.url.split("?");
        var paramArray = url_data[1].split("&");
    }
    paramArray.forEach(function (element) {
        var param_data = element.split("=");
        parameters[param_data[0]] = param_data[1];
    }, this);
    return parameters;
}


module.exports.parseParams=parseParams;