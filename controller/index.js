const { diaryDummyData } = require("../repository/diaryData");
const diaryData = diaryDummyData;
const diaryController = {
  // router.get("/", findAll);
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(diaryData);
  },

  // router.get("/:id", findById);
  findById: (req, res) => {
    if (req.params) {
      const idx = diaryData.find((item) => item.id === Number(req.params.id));
      // 조회하려는 id가 있다면
      if (idx !== undefined) {
        res.status(200).json(idx);
      }
    }
    res.status(404).send("Not found!!");
  },
  createOne: (req, res) => {
    const newItem = req.body;
    diaryData.unshift(newItem);

    return res.status(200).send("Create Diary!!");
  },

  updateById: (req, res) => {
    const updated = diaryData.filter((item) => item.id === Number(req.body.id));
    const change = { ...updated[0], ...req.body };
    const idx = diaryData.findIndex(
      (item) => item.id === Number(req.params.id)
    );

    diaryData.splice(idx, 1, change);
    return res.status(200).json(change);
  },

  deleteById: (req, res) => {
    const deleted = diaryData.findIndex(
      (item) => item.id === Number(req.params.id)
    );
    diaryData.splice(deleted, 1);
    return res.status(200).json();
  },
};

module.exports = {
  diaryController,
};
