import mongoose from "mongoose";
import bcrypt from "bcryptjs";

    const userSchema = mongoose.Schema(
        {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        }
        },
        {
        timestamps: true,
        }
    );
  
    userSchema.methods.matchPassword = async function (enteredPassword) {
        return await bcrypt.compare(enteredPassword, this.password);
     }

  // will encrypt password everytime its saved
    userSchema.pre("save", async function (next) {
        if (!this.isModified("password")) {
         next();
    }
        const salt = await bcrypt.genSalt(8);
        this.password = await bcrypt.hash(this.password, salt);
     });

const User = mongoose.model("User", userSchema);
  
export default User;