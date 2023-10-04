import { IUser } from "../interfaces/UserInterface";
import { userRepository } from "../models/UserRepository";

export class UserController {
  public async findAll(): Promise<IUser[]> {
    return userRepository.findAll();
  }

  public async findById(id: string): Promise<IUser | null> {
    return userRepository.findById(id);
  }

  public async create(
    name: string,
    surname: string,
    email: string
  ): Promise<IUser> {
    return userRepository.create(name, surname, email);
  }

  public async destroy(id: string): Promise<boolean> {
    const userDeleted = await userRepository.destroy(id);
    return userDeleted.acknowledged;
  }
}
