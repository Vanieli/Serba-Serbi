import Flora from "../modules/FloraModul.js";

const getFlora = async (req, res) => {
    try {
        const response = await Flora.findAll({
            attributes: [
                'id',
                'nm_flora',
                'geografis',
                'age',
                'jenis_daun',
                'jenis_batang',
                'jenis_akar',
            ],
        });

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export default getFlora;