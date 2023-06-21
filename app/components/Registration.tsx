"use client";
import Image from "next/image";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import form_right from "./../../public/form_right.png";
import Button from "./Button";
import Input from "./Input";

const Registration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <div className="bg-cover bg-no-repeat registration h-[670px] relative ">
      <div className="flex flex-col  pt-6 pb-4">
        <div className="left">
          <div className="shadow_h2 text-3xl font-primetime text-white pl-4 pb-3">
            Registration
          </div>
          <form className="pl-4 pr-4 pt-2">
            <div className="form-field">
              <Input
                id="name"
                label="NAME"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
            </div>
            <div className="form-field">
              <Input
                id="mobile"
                label="MOBILE NUMBER"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                type="number"
              />
            </div>
            <div className="form-field">
              <Input
                id="email"
                label="EMAIL"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                type="string"
              />
            </div>
            <div className="form-field">
              <Input
                id="emirate"
                label="EMIRATE"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                type="string"
              />
            </div>
            <div className="form-field">
              <Input
                id="emirateId"
                label="EMIRATES ID NUMBER"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                type="number"
              />
            </div>
            <div className="form-field">
              <Input
                id="emi"
                label="UPLOAD PURCHASE RECIEPT"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                type="file"
              />
            </div>
            <div className="form-field pt-4">
              <Button
                label="SUBMIT"
                onClick={() => {
                  console.log("button clicked");
                }}
              />
            </div>
          </form>
        </div>
        <div className="right">
          <Image
            alt="school year"
            placeholder="empty"
            priority={true}
            quality={100}
            src={form_right}
            className="m-auto w-[150px] absolute bottom-[-1.2%] left-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Registration;
