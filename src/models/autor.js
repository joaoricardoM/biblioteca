import mongoose from "mongoose";

const authoSchema = new mongoose.Schema({

    id: { type: String },
    name: { type: String, required: true },
    nacionality: { type: String }
},
    {
        versionKey: false
    }

)
        const author = mongoose.model("autor", authoSchema);

        export default author;