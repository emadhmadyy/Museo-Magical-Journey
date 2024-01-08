const Artwork = require("../models/artwork.model");
const path = require("path");
const Museum = require("../models/museum.model");

const addArtwork = async (req, res) => {
  if (req.user.user_type == 0) {
    try {
      const textures = req.files.texture.map((texture) => {
        const texture_name = path.basename(
          texture.originalname,
          path.extname(texture.originalname)
        );
        return {
          texture_name: texture_name,
          texture_file_url: `http://localhost:8000/uploads/textures/${texture.filename}`,
        };
      });

      const artwork = new Artwork({
        artwork_name: req.body.artwork_name,
        model_file_url: `http://localhost:8000/uploads/3dmodels/${req.files.model[0].filename}`,
        textures: textures,
      });

      const updatedMuseum = await Museum.findByIdAndUpdate(
        "6588ad089803815f696215c9",
        { $push: { artworks: artwork } },
        { new: true }
      );

      if (updatedMuseum) {
        res.status(200).send({
          message: "Artwork added to museum successfully",
          museum: updatedMuseum,
        });
      } else {
        res.status(404).send({ error: "Museum not found" });
      }
    } catch (error) {
      console.error("Error adding artwork:", error);
      res.status(500).send({ error: "Internal server error" });
    }
  } else {
    res.status(403).send({ message: "Forbidden" });
  }
};

module.exports = { addArtwork };