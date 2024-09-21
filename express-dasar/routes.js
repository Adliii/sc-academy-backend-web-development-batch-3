import express from "express";

const router = express.Router();
router.get("/", (req, res) => {
  res.status(200).json({
    "fullname": "adli nursah",
    "nickname": "adli",
  });
});

router.get('/book', (req, res) =>{
    res.status(200).json({
        "daftar buku bacaan" :{
            "status code" : 200,
            "judul buku" : "atomic habits",
            "penulis": "james clear"
        }
    });
});

// buatlah sebuah operasi matematika ketika route 'operasi-matematika' di akses lakukan operasi matematika seperti penjumlahan, pengurangan, pembagian dan perkalian
export default router;
