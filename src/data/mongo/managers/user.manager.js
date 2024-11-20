import Movie from "../models/movies.model.js";

const create = async (data) => {
  try {
    const one = await Movie.create(data);
    return one;
  } catch (error) {
    throw error;
  }
};

const read = async () => {
  try {
    const all = await Movie.find().lean();
    return all;
  } catch (error) {
    throw error;
  }
};

const update = async (id, data) => {
  try {
    const opt = { new: true };
    const one = await Movie.findByIdAndUpdate(id, data, opt);
    return one;
  } catch (error) {
    throw error;
  }
};

const destroy = async () => {
  try {
    const one = await Movie.findByIdAndDelete(id);
    return one;
  } catch (error) {
    throw error;
  }
};

export { create, read, update, destroy };
