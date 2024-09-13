import { z } from "zod";

export const familiesSchema = z.object({
  family: z.array(
    z.object({
      family_name: z.string(),
      padre: z.string(),
      madre: z.string(),
      hijos: z.array(z.string()),
      heraldica: z.array(z.string()),
      nivel: z.number()
    })
  )
});

export const familySchema = z.object({
  family_name: z.string(),
  padre: z.string(),
  madre: z.string(),
  hijos: z.array(z.string()),
  heraldica: z.array(z.string()),
  nivel: z.number()
});

export const personSchema = z.object({
  name: z.string(),
  image: z.string(),
  birthday: z.string(),
  genre: z.string(),
  death: z.string(),
  birthdayCard: z.string(),
  hijos: z.array(z.string())
});

export const lastNameSchema = z.object({
  lastName: z.string(),
  blazon: z.string(),
  wiki: z.string(),
  source: z.string(),
  description: z.string()
});

export type Families = z.infer<typeof familiesSchema>;
export type Family = z.infer<typeof familySchema>;
export type Person = z.infer<typeof personSchema>;
export type LastName = z.infer<typeof lastNameSchema>;