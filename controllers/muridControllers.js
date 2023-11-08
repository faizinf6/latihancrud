import { Kelas, Murid } from '../models/index.js';


export const getAllMurids = async (req, res) => {
  try {
    const murids = await Murid.findAll({
        include: [{
            model: Kelas,
            as: 'kelas'
          }]
        }
    );
    res.json(murids);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Create new Murid
export const createMurid = async (req, res) => {
    try {
      const { nama, gender, isBoyong, kelasId } = req.body;
      console.log(kelasId)
  
      // Validasi KelasId sebelum melanjutkan
      if (kelasId && !(await Kelas.findByPk(kelasId))) {
        return res.status(404).send('Kelas tidak ditemukan.');
      }
  
      const newMurid = await Murid.create({ nama, gender, isBoyong, kelasId });
      res.status(201).json(newMurid);
    } catch (error) {
      const { nama, gender, isBoyong, kelasId } = req.body;

      console.log("babiii")
      // res.status(500).json(req.body);

      res.status(500).send(error.message);

    }
  };
  
  // Update Murid
  export const updateMurid = async (req, res) => {
    try {
      const { id } = req.params;
      const { nama, gender, isBoyong, KelasId } = req.body;
  
      // Validasi KelasId sebelum melanjutkan
      if (KelasId && !(await Kelas.findByPk(KelasId))) {
        return res.status(404).send('Kelas tidak ditemukan.');
      }
  
      const murid = await Murid.findByPk(id);
      if (!murid) {
        return res.status(404).send('Murid tidak ditemukan.');
      }
  
      murid.nama = nama;
      murid.gender = gender;
      murid.isBoyong = isBoyong;
      murid.KelasId = KelasId;
      await murid.save();
  
      res.json(murid);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  // Delete Murid
  export const deleteMurid = async (req, res) => {
    try {
      const { id } = req.params;
      const murid = await Murid.findByPk(id);
  
      if (!murid) {
        return res.status(404).send('Murid tidak ditemukan.');
      }
  
      await murid.destroy();
      res.status(204).send('Murid berhasil dihapus.');
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  // Export semua fungsi controller
  export default {
    getAllMurids,
    createMurid,
    updateMurid,
    deleteMurid
  };

// ... Tambahan untuk create, update, dan delete
