import z from "zod";

export const welcomeinput = z.object({
  email: z.string().email(),
  gender: z.string(),
  age: z.string(),
  location: z.string(),
  bio: z.string(),
  proudmoment: z.string(),
});
