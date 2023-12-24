// const Artwork = require("../models/artwork.model");
// const path = require("path");
// const Museum = require("../models/museum.model");

// const addArtwork = async (req, res) => {
//   try {
//     const textures = req.files.texture.map((texture) => {
//       const texture_name = path.basename(
//         texture.originalname,
//         path.extname(texture.originalname)
//       );
//       return {
//         texture_name: texture_name,
//         texture_file_url: `http://localhost:8000/uploads/textures/${texture.filename}`,
//       };
//     });

//     const artwork = new Artwork({
//       artwork_name: req.body.artwork_name,
//       model_file_url: `http://localhost:8000/uploads/3dmodels/${req.files.model[0].filename}`,
//       textures: textures,
//     });

//     const updatedMuseum = await Museum.findByIdAndUpdate(
//       "6588ad089803815f696215c9",
//       { $push: { artworks: artwork } },
//       { new: true }
//     );

//     if (updatedMuseum) {
//       res.status(200).json({
//         message: "Artwork added to museum successfully",
//         museum: updatedMuseum,
//       });
//     } else {
//       res.status(404).json({ error: "Museum not found" });
//     }
//   } catch (error) {
//     console.error("Error adding artwork:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// module.exports = { addArtwork };
