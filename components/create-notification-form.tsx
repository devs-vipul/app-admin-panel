"use client";

import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const userTypes = ["Coach", "All", "Members"];

const validationSchema = Yup.object().shape({
  userType: Yup.string().required("User type is required"),
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
});

export function CreateNotificationForm() {
  const formik = useFormik({
    initialValues: {
      userType: "",
      title: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col items-center w-full space-y-6 p-4"
    >
      <div className="w-full grid grid-cols-2 gap-8">
        <div>
          <label
            htmlFor="userType"
            className="block text-sm font-medium text-white mb-2"
          >
            Select User
          </label>
          <Select
            name="userType"
            onValueChange={(value) => formik.setFieldValue("userType", value)}
            value={formik.values.userType}
          >
            <SelectTrigger className="bg-[#1C1C1C] border-[#F2D679] text-white [&>svg]:text-[#F2D679]">
              <SelectValue placeholder="Select From The Options" />
            </SelectTrigger>
            <SelectContent className="bg-[#1C1C1C] border-[#F2D679]">
              {userTypes.map((type) => (
                <SelectItem
                  key={type}
                  value={type}
                  className="text-white focus:bg-[#2C2C2C] focus:text-[#F2D679]"
                >
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {formik.touched.userType && formik.errors.userType ? (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.userType}
            </div>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-white mb-2"
          >
            Title
          </label>
          <Input
            id="title"
            name="title"
            placeholder="Select From The Options"
            className="bg-[#1C1C1C] border-[#F2D679] text-white placeholder:text-zinc-500"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.title}
            </div>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-white mb-2"
          >
            Description
          </label>
          <Textarea
            id="description"
            name="description"
            placeholder="Please Write The Down The Full Description Of The Notification"
            className="min-h-[120px] bg-[#1C1C1C] border-[#F2D679] text-white placeholder:text-zinc-500 resize-none"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.description}
            </div>
          ) : null}
        </div>
      </div>
      <Button
        type="submit"
        className="bg-[#F2D679] text-black hover:bg-[#F2D679]/90"
      >
        Send Notification
      </Button>
    </form>
  );
}
