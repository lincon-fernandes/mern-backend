const Annotations = require('../models/annotationData');

module.exports = {
  async read(req, res) {
    const annotationList = await Annotations.find();

    return res.json(annotationList);
  },

  async create(req, res) {
    console.log(req.body);
    const { title, notes, priority } = req.body;

    if (!notes || !title) {
      return res.status(400).json({ error: 'Necessario um titulo/anotaçaos' });
    }
    const annotationCreated = await Annotations.create({
      title,
      notes,
      priority,
    });
    return res.json(annotationCreated);
  },
  async delete(req, res) {
    const { id } = req.params;

    const annotationDeleted = await Annotations.findOneAndDelete({ _id: id });
    if (annotationDeleted) {
      return res.json(annotationDeleted);
    }
    return res.status(401).json({ error: 'nao foi encontado o registro' });
  },
};
