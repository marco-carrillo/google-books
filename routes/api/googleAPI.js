//******************************************************************************************/
//  This file will manage the call to the google API.  In a way, it is an API that         */
//  makes an API call.  The reason for doing so in the server rather than directly from    */
//  the browser is not to expose the API key.                                              */
//******************************************************************************************/
const router = require("express").Router();

//***********************************************/
// Serves a single route GET "/api/googleAPI".  */
//***********************************************/
router.route("/")
  .get(booksController.findAll)
