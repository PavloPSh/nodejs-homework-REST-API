const { Contact } = require('../../models');


const getAll = async (req, res) => {
    const { _id: owner } = req.user;
    const { page = 1, limit = 10 } = req.query;
    const { favorite } = req.query;
    
    
    const skip = (page - 1) * 10;

    if (favorite === "true") {
        const resultFavorite = await Contact.find({ owner, favorite: true }, "-updatedAt", { skip, limit });
        
        res.status(200).json(resultFavorite); 
    } 
    
    const result = await Contact.find({ owner }, "-updatedAt", { skip, limit });
    
    res.status(200).json(result);
};

module.exports = getAll;