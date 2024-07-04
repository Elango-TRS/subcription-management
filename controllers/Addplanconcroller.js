const planadd = require('../model/planModel');

class Addplanconcroller {
    async addplan(req, res) {
        const { planname, price, feature, Duration } = req.body;
        try {
            const adding = new planadd({ planname, price, feature, Duration });
            const date = await adding.save();
            res.status(201).json({
                success: 'Data has been inserted',
                saved_data: date
            });
        } catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }
}

module.exports = new Addplanconcroller();