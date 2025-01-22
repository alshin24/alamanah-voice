import { z } from "zod"
 
const formSchema = z.object({
    message: z.string().min(1, {
      message: "Form pesan harus di isi"
  }),
})

export { formSchema }