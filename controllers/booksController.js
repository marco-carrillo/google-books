//**********************************************************/
//  Getting the Mongoose models for the collection table   */
//**********************************************************/
const db = require("../models");

//********************************************/
// Defining methods for the booksController  */
//********************************************/
module.exports = {
  //***************************************************************/
  //  Serves all the books, sorting it from most recent to oldest */
  //***************************************************************/

  findAll: function(req, res) {
  
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //*****************************************************/
  //  Finds a document based on the ID of such document */
  //*****************************************************/
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //**************************************************/
  //  Creates a document using the parameters passed */
  //**************************************************/
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //*********************************************************************************/
  //  Updates a document in the collection using the ID, and the information passed */
  //*********************************************************************************/
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //******************************************/
  //  Deletes a document using the ID passed */
  //******************************************/
  remove: function(req, res) {
    console.log(req.params.id)
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};