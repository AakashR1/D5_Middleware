const { ErrorType } = require("../helpers/enum");
function generateErrorResponse(err, status, res) {
  let errObj = { error_code: err.reason, error_message: err.message };
console.log('this is here');
  return res.status(status).send(errObj);
}
function generateAndSendAppErrorResponce(err, res) {
  switch (err.reason) {
    case ErrorType.invalid_request:
      return generateErrorResponse(err, 400, res);
    case ErrorType.not_found:
      return generateErrorResponse(err, 404, res);
    case ErrorType.permission_denied:
      return generateErrorResponse(err, 403, res);
    case ErrorType.unauthorized:
      return generateErrorResponse(err, 401, res);
    case ErrorType.conflict:
      return generateErrorResponse(err, 409, res);
    case ErrorType.validation_error:
      return generateErrorResponse(err, 400, res);
    case ErrorType.unknown_error:
        
    default:
      return generateErrorResponse(err, 500, res);
  }
}
module.exports = function (err, req, res, next) {
    console.log('here');
  console.log("-----------------------",err);
  return generateAndSendAppErrorResponce(err, res);
};