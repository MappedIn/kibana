let _ = require("lodash");
const KNOWN_APIS = ['es_5_0'];
module.exports.resolveApi = function (sense_version, apis, reply) {
  let result = {};
  _.each(apis, function (name) {
    {
      if (KNOWN_APIS.includes(name)) {
        // for now we ignore sense_version. might add it in the api name later
        let api = require('./' + name);
        result[name] = api.asJson();
      }
    }
  });

  return reply(result).type("application/json");
};
