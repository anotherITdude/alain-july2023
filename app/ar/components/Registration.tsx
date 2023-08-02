"use client";
import React, { ChangeEvent, useRef } from "react";

import Image from "next/image";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import form_right from "@/public/f_registration_right_ar.png";
import Button from "./Button";
import Input from "./Input";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { schema } from "@/schemas/Validation";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const Registration = () => {
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
      receipt: "",
      lan: "ar",
      selected: false,
      info: " ",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    let toastStatus = toast.loading("Uploading data. Please wait...");
    console.log({ data: data });
    try {
      setIsLoading(true);
      data.contentType = data.receipt[0].type;
      data.receiptName = data.receipt[0].name;
      const response = await axios
        .post("/api/entries", data)
        .then(async (res) => {
          console.log(res);
          const formData = new FormData();
          Object.entries(res.data.fields).forEach(([key, value]) => {
            formData.append(key, value as string);
          });
          formData.append("file", data.receipt[0]);
          console.log(formData);
          const uploadResponse = await fetch(res.data.url, {
            method: "POST",
            body: formData,
          });
          if (uploadResponse.ok) {
            console.log("Upload successful!");
          } else {
            console.log("S3 Upload Error:", uploadResponse);
            console.log("Upload failed.");
          }

          toast.dismiss(toastStatus);
          toast.success("Your submission is completed...");
          reset();
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      toast.error("Something went wrong please try again" + error);
      toast.dismiss(toastStatus);
    }
  };

  return (
    <div
      id="register"
      className="bg-cover bg-center registration h-full md:h-full  relative overflow-hidden "
    >
      <div
        className="flex flex-col  lg:flex-row-reverse section 
      pt-6 pb-8
      md:pt-16 md:pb-16"
      >
        <div className="left ">
          <div
            className="shadow_h1_ar uppercase
          text-3xl md:text-5xl lg:text-6xl 
          font-helvetica-neue-lt-arabic-75-bold
           text-white
          pr-6 pb-3 pt-0 text-right"
          >
            التسجيل
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className=""
          >
            <Image
              alt="school year"
              placeholder="empty"
              priority={true}
              quality={100}
              src={form_right}
              className="
              w-[120px] sm:w-[150px] 
              md:w-[300px] lg:w-[700px]
              xl:w-[900]
              md:hidden lg:block
              absolute md:relative 
              bottom-[1%] 
              right-4"
            />
          </motion.div>
        </div>
        <div
          className="right
          w-full
        lg:w-[65vw]
        xl:w-[50vw]
        md:mt-16"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="pl-4 pr-4 pt-2">
            <div className="form-field  ">
              <Input
                id="name"
                label="الاسم"
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
                label="رقم الهاتف المتحرك"
                disabled={isLoading}
                register={register}
                errors={errors}
                type="number"
              />
            </div>
            <div className="form-field">
              <Input
                id="email"
                label="عنوان البريد الإلكتروني"
                disabled={isLoading}
                register={register}
                errors={errors}
                type="email"
              />
            </div>
            <div className="form-field">
              <Input
                id="emirate"
                label="الإمارة"
                disabled={isLoading}
                register={register}
                errors={errors}
                type="string"
              />
            </div>
            <div className="form-field">
              <Input
                id="eid"
                label="رقم بطاقة الهوية الإماراتية"
                disabled={isLoading}
                register={register}
                errors={errors}
                type="number"
              />
            </div>
            <div className="form-field">
              <Input
                id="receipt"
                label="تحميل فاتورة الشراء"
                disabled={isLoading}
                register={register}
                errors={errors}
                type="file"
              />
              <div className="mt-2 ml-2 text-xs cursor-pointer text-[#002E6D] font-almarai-regular ">
                ( الحد الأقصى لملف التحميل: 2 ميغا بايت )
              </div>
            </div>
            <div
              className={`flex form-field pt-4 ${
                isLoading ? "animate-pulse" : ""
              }`}
            >
              <Button
                disabled={isLoading}
                label={`${isLoading ? "إرسال..." : "إرسال"}`}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
