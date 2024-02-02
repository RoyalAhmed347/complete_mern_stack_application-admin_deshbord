const { z } = require("zod");

const contectSchema = z.object({
  username: z
    .string({ required_error: "username is require" })
    .min(3, { message: "username min length 3 chracters" })
    .max(25, { message: "username max length 25 chracters" }),
  email: z
    .string({ required_error: "Email is require" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "email min length 3 chracters" })
    .max(25, { message: "email max length 25 chracters" }),

  message: z
    .string({ required_error: "message is require" })
    .min(10, { message: "message min length 10 chracters" })
    .max(100, { message: "message max length 1000 chracters" }),
});

module.exports = contectSchema;
