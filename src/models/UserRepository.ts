import mongoose from "mongoose";
import { UserSchema } from "./UserModel";
import { IUser } from "../interfaces/UserInterface";

export class UserRepository {
  constructor() {
    this.model = mongoose.model("User", UserSchema);
  }

  private model;

  public async findById(id: string): Promise<IUser> {
    const user = await this.model.findById(id);

    if (!user) {
      throw new Error(`User ${id} does not exist`);
    }

    console.log(user);

    return user.toJSON();
  }

  public async create(
    name: string,
    surname: string,
    email: string
  ): Promise<IUser> {
    const user = await this.model.create({
      name,
      surname,
      email,
    });

    console.log(user);

    return user.toJSON();
  }

  public findAll(): Promise<IUser[]> {
    return this.model.find({});
  }

  public destroy(id: string): Promise<any> {
    return this.model.deleteOne({ id });
  }

  // public async destroy(id: string): Promise<any> {
  //   return UserModel.deleteOne({ _id: id }).exec();
  // }
}

const userRepository = new UserRepository();
export { userRepository };
