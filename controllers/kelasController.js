// controllers/kelasController.js
import { Kelas, Murid } from '../models/index.js';

export const getAllKelas = async (req, res) => {
    try {
      const kelas = await Kelas.findAll();
      res.json(kelas);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
const createKelas = async (req, res) => {
  try {
    const { nama, waktu } = req.body;

    // Membuat instance Kelas baru
    const kelas = await Kelas.create({ nama, waktu });

    // Mengirim response berhasil
    res.status(201).json({
      message: "Kelas berhasil dibuat",
      kelas
    });
  } catch (error) {
    // Mengirim response error
    res.status(500).json({ error: error.message });
  }
};



export { createKelas };
