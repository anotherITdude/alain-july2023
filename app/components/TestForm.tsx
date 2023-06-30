'use client'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "@/schemas/Validation";

type FormValues = {
  name: string;
  email: string;
  mobile: string;
  emirate: string;
  eid: string;
  uploadReceipt: string;
};

const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data); // Do something with the form data
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("name")} />
      {errors.name && <span>{errors.name.message}</span>}

      <input type="text" {...register("email")} />
      {errors.email && <span>{errors.email.message}</span>}

      <input type="text" {...register("mobile")} />
      {errors.mobile && <span>{errors.mobile.message}</span>}

      <input type="text" {...register("emirate")} />
      {errors.emirate && <span>{errors.emirate.message}</span>}

      <input type="text" {...register("eid")} />
      {errors.eid && <span>{errors.eid.message}</span>}

      <input
        id="uploadReceipt"
        type="file"
        {...register("uploadReceipt")}
        accept="image/jpeg, image/png"
      />
      {errors.uploadReceipt && <span>{errors.uploadReceipt.message}</span>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
