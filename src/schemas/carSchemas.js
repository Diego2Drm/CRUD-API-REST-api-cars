import { z } from 'zod'

const CarSchemas = z.object({
  image: z.string().url("Must be a valid URL"),
  model: z.string().min(1, "Model is required"),
  brand: z.string().min(1, "Brand is required"),
  price: z.number().int().positive().min(1, "Price is required"),
  rating: z.number().min(1, "Rating is required and maximum 5").max(5),
})

export function validateCar(object) {
  return CarSchemas.safeParse(object);
};