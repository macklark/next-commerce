import { hash, compare } from "bcryptjs";

export async function passwordHasher(password) {
  const salt = await hash(password, 11);
  return salt;
}

export async function passwordChecker(password, hash) {
  const result = await compare(password, hash);
  return result;
}
