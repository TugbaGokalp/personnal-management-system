import Time from "../models/timeModel.js";

const createTime = async (req, res) => {
  try {
    const time = await Time.create(req.body);
    // console.log('REQ BODY', req.body);
    res.status(201).json({
      succeded: true,
      time,
    });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};


const getRegisterPage = (req, res) => {
    res.render('register', {
        link: 'register',
    });
};


//! VERIYI CEKMIYOR!

const getAllTimes = async (req, res) => {
  try {
    const times = await Time.find([]);
    res.status(200).json({
      //yeni bir veri oluşturmadığım için 200
      succeded: true,
      times,
    });
  } catch (error) {
    res.status(500).json({
        succeded: false,
        error,
    });
  }
};

export { createTime, getAllTimes, getRegisterPage };
