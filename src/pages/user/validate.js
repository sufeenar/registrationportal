import * as yup from "yup";

export const validate = yup.object({
  name: yup.string().min(2).required(),
  email: yup.string().email().required(),
  mobile: yup.string().min(10).required(),
});
