"use client";
import React, { ChangeEvent } from "react";

import Image from "next/image";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import form_right from "./../../public/form_right.png";
import Button from "./Button";
import Input from "./Input";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

import * as yup from "yup";
import { schema } from "@/schemas/Validation";
import { yupResolver } from "@hookform/resolvers/yup";

const Registration = ({ ...props}) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    resolver: yupResolver(schema) as any, // Use 'as any' to handle type mismatch

    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      emirate: "",
      eid: "",
      reciept: "",
    },
  });
  const notify = () => toast.success("Uploading data pleasse wait");

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    const uploading = toast.loading("Uploading data pleasse wait");
    console.log(data);
    setIsLoading(true);
    toast.dismiss(uploading);
    toast.success("Thankyou for your submission");

    //reset();
    //setIsLoading(false);
  };

  return (
    <div {...props} className="bg-cover bg-center registration h-[700px] md:h-[740px]  relative ">
      <div className="flex flex-col section ">
        <div className="left">
          <div
            className="shadow_h2 uppercase
          text-3xl md:text-4xl lg:text-5xl 
          font-primetime text-white
          pl-4 pb-3 pt-3 "
          >
            Registration
          </div>
          <Toaster />
          <form onSubmit={handleSubmit(onSubmit)} className="pl-4 pr-4 pt-2">
            <div className="form-field ">
              <Input
                id="name"
                label="NAME"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                type="text"
              />
            </div>
            <div className="form-field">
              <Input
                id="mobile"
                label="MOBILE NUMBER"
                disabled={isLoading}
                register={register}
                errors={errors}
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
                type="email"
              />
            </div>
            <div className="form-field">
              <Input
                id="emirate"
                label="EMIRATE"
                disabled={isLoading}
                register={register}
                errors={errors}
                type="string"
              />
            </div>
            <div className="form-field">
              <Input
                id="eid"
                label="EMIRATES ID NUMBER"
                disabled={isLoading}
                register={register}
                errors={errors}
                type="number"
              />
            </div>
            <div className="form-field">
              <Input
                id="receipt"
                label="UPLOAD PURCHASE RECIEPT"
                disabled={isLoading}
                register={register}
                errors={errors}
                type="file"
              />
            </div>
            <div
              className={`form-field pt-4 ${isLoading ? "animate-pulse" : ""}`}
            >
              <Button
                disabled={isLoading}
                label={`${isLoading ? "Submitting form..." : "Submit"}`}
              />
            </div>
          </form>
        </div>
        <div className="right">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              alt="school year"
              placeholder="empty"
              priority={true}
              quality={100}
              src={form_right}
              className=" w-[150px] absolute bottom-[1%] left-4"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
