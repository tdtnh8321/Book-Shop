const TypeModel = require("../models/typeModel");

module.exports = function APIfeatures(query, queryString) {
  this.query = query; //Product.find().populate("idtype idauth idpublisher")
  this.queryString = queryString; //req.query

  this.paginating = () => {
    const perpage = 2;
    const page = this.queryString.page * 1 || 1;
    const start = (page - 1) * perpage;
    this.query = this.query.limit(perpage).skip(start);
    return this;
  };
  this.sorting = async () => {
    const sort = this.queryString.sort || "";
    this.query = this.query.sort(sort);
    return this;
  };
  this.searching = () => {
    const search = this.queryString.search;
    //new RegExp(search, 'i')  {$regex : search}
    if (search) {
      this.query = this.query.find({
        slug: { $regex: ".*" + search + ".*" },
      });
    } else {
      this.query = this.query.find();
    }
    return this;
  };
  this.typing = () => {
    const type = this.queryString.type;

    if (type) {
      this.query = this.query.find({ idType: type });
    } else {
      this.query = this.query.find();
    }
    return this;
  };

  this.authoring = () => {
    const author = this.queryString.author;

    if (author) {
      this.query = this.query.find({ idAuthor: author });
    } else {
      this.query = this.query.find();
    }
    return this;
  };
};
