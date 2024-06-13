import KeajaibanDunia from "../modules/KeajaibanDuniaModule.js";

const getKeajaibanDunia = async (req, res) => {
    try {
        const response = await KeajaibanDunia.findAll({
            attributes: [
                'id',
                'nm_wonderful',
                'geografis',
                'tahun_dibangun',
                'negara',
                'deskripsi',
            ]
        });

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export default getKeajaibanDunia;