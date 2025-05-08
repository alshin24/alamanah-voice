import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Form nama harus di isi minimal dengan 3 huruf"
  }).optional(),
  message: z.string().min(3, {
    message: "Form pesan harus di isi"
  }),
})

export { formSchema }