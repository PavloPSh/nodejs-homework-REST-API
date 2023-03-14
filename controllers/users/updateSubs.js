const { User } = require('../../models');


const updateSubscription = async (req, res) => {
    const { _id } = req.user;
    
    console.log(req.body)

    const result = await User.findByIdAndUpdate(_id, req.body, { new: true });

    if (!result) {
        throw HttpError(404, 'Not found');
    };

    res.json({
        message:'subs upd'
    })
}


module.exports = updateSubscription;