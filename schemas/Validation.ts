// validationSchema.js
import * as yup from "yup";

interface File {
  size: number;
  type: string;
}

export type FormValues = {
  name: string;
  mobile: string;
  email: string;
  emirate: string;
  eid: string;
  receipt: FileList;
};

export const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  mobile: yup
    .string()
    .required("Mobile is required")
    .min(10, "Mobile must be at least 10 digits"),
  email: yup.string().required("Email is required").email("Invalid email"),
  emirate: yup.string().required("Emirate is required"),
  eid: yup
    .string()
    .required("EID is required")
    .min(15, "EID must be at least 15 digits")
    .matches(/^\d+$/, "EID must be numeric"),
  receipt: yup
    .mixed()
    .required("Receipt is required")
    .test("fileSize", "Please upload your reciept. Max 2 mb limit", (value: any, context) => {
      return value && value[0] && value[0]?.size <= 200000;
    })
    .test("type", "We only support JPEG and PNG images", function (value: any) {
      if (!value) return true; // Allow empty value if no file is selected

      const fileType = value[0]?.type;
      return fileType === "image/jpeg" || fileType === "image/png";
    }),
});


