function render(html,parameters) {
    var html_string = html.toString();
    var variables = html_string.match(/[^\{\}]+(?=\})/g);
    for (var index = variables.length - 1; index >= 0; index--) {
                html_string = html_string.replace("{" + variables[index] + "}", parameters[variables[index]]);
            };
   return html_string;         
}
module.exports.render=render;
