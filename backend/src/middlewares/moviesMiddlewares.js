const verifyBodyFieldsPost = (req, res, next) => {
  const { title, rating, description, image_url, user_id } = req.body;

  if (!title)
    return res.status(400).json({ message: 'The field title is required' });

  if (!rating)
    return res.status(400).json({ message: 'The rating title is required' });

  if (!description)
    return res
      .status(400)
      .json({ message: 'The field description is required' });

  if (!image_url)
    return res.status(400).json({ message: 'The field image_url is required' });

  if (!user_id)
    return res.status(400).json({ message: 'The field user_id is required' });

  next();
};

const verifyDetailsPost = (req, res, next) => {
  let { rating, user_id } = req.body;
  rating = +rating;
  user_id = +user_id;

  req.body.rating = rating;
  req.body.user_id = user_id;

  if (!rating)
    return res.status(400).json({ message: 'the rating should be a number' });

  if (rating > 10 || rating < 0)
    return res
      .status(400)
      .json({ message: 'The rating should be in interval of 0 to 10' });

  if (!user_id)
    return res.status(400).json({ message: 'the user_id should be a number' });

  next();
};

const verifyBodyFieldsPut = (req, res, next) => {
  const { title, rating, description, image_url } = req.body;

  if (!title)
    return res.status(400).json({ message: 'The field title is required' });

  if (!rating)
    return res.status(400).json({ message: 'The rating title is required' });

  if (!description)
    return res
      .status(400)
      .json({ message: 'The field description is required' });

  if (!image_url)
    return res.status(400).json({ message: 'The field image_url is required' });

  next();
};


const verifyDetailsPut = (req, res, next) => {
  let { rating } = req.body;
  rating = +rating;

  req.body.rating = rating;

  if (!rating)
    return res.status(400).json({ message: 'the rating should be a number' });

  if (rating > 10 || rating < 0)
    return res
      .status(400)
      .json({ message: 'The rating should be in interval of 0 to 10' });
      
  next();
};


module.exports = {
  verifyBodyFieldsPost,
  verifyDetailsPost,
  verifyBodyFieldsPut,
  verifyDetailsPut
};
