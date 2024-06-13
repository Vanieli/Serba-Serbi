import Fauna from "../modules/FaunaModul.js";

const getFauna = async (req, res) => {
    try {
        const response = await Fauna.findAll({
            attributes: [
                'id',
                'nm_fauna',
                'geografis',
                'age',
                'tinggi',
                'berat',
            ],
        });

        res.status(200).json(response);
    } catch(error) {
        res.status(500).json({msg: error.message});
    }
};

export default getFauna;