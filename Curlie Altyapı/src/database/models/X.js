const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const SayaçOtoRolModel = mongoose.models["sayaç-otorol"] || model("sayaç-otorol", new Schema({ guild: String, role: String }));

module.exports = SayaçOtoRolModel;