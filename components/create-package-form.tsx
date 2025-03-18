"use client";

import { useFormik } from "formik";
import { ImageIcon } from "lucide-react";
import * as React from "react";
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

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Package name is required"),
  amount: Yup.number()
    .required("Package amount is required")
    .positive("Amount must be positive"),
  paymentType: Yup.string().required("Payment type is required"),
  paymentFrequency: Yup.string().when("paymentType", {
    is: "recurring",
    then: () => Yup.string().required("Payment frequency is required"),
    otherwise: () => Yup.string().nullable(),
  }),
  description: Yup.string().required("Description is required"),
  thumbnail: Yup.mixed(),
});

export function CreatePackageForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      amount: "",
      paymentType: "",
      paymentFrequency: "",
      description: "",
      thumbnail: null,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      formik.setFieldValue("thumbnail", file);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6 p-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Name
          </label>
          <Input
            name="name"
            placeholder="Add package name"
            className="bg-[#1C1C1C] border-[#F2D679] text-white placeholder:text-zinc-500"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.name}
            </div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Package Amount ($)
            </label>
            <Input
              name="amount"
              type="number"
              placeholder="Package Amount ($)"
              className="bg-[#1C1C1C] border-[#F2D679] text-white placeholder:text-zinc-500"
              value={formik.values.amount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.amount && formik.errors.amount && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.amount}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Payment Type
            </label>
            <Select
              name="paymentType"
              onValueChange={(value) =>
                formik.setFieldValue("paymentType", value)
              }
              value={formik.values.paymentType}
            >
              <SelectTrigger className="bg-[#1C1C1C] border-[#F2D679] text-white [&>svg]:text-[#F2D679]">
                <SelectValue placeholder="Payment Type" />
              </SelectTrigger>
              <SelectContent className="bg-[#1C1C1C] border-[#F2D679]">
                <SelectItem
                  value="recurring"
                  className="text-white focus:bg-[#2C2C2C] focus:text-[#F2D679]"
                >
                  Recurring
                </SelectItem>
                <SelectItem
                  value="onetime"
                  className="text-white focus:bg-[#2C2C2C] focus:text-[#F2D679]"
                >
                  One Time
                </SelectItem>
              </SelectContent>
            </Select>
            {formik.touched.paymentType && formik.errors.paymentType && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.paymentType}
              </div>
            )}
          </div>

          {formik.values.paymentType === "recurring" && (
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Payment Frequency
              </label>
              <Select
                name="paymentFrequency"
                onValueChange={(value) =>
                  formik.setFieldValue("paymentFrequency", value)
                }
                value={formik.values.paymentFrequency}
              >
                <SelectTrigger className="bg-[#1C1C1C] border-[#F2D679] text-white [&>svg]:text-[#F2D679]">
                  <SelectValue placeholder="Select Frequency" />
                </SelectTrigger>
                <SelectContent className="bg-[#1C1C1C] border-[#F2D679]">
                  <SelectItem
                    value="monthly"
                    className="text-white focus:bg-[#2C2C2C] focus:text-[#F2D679]"
                  >
                    Monthly
                  </SelectItem>
                  <SelectItem
                    value="weekly"
                    className="text-white focus:bg-[#2C2C2C] focus:text-[#F2D679]"
                  >
                    Weekly
                  </SelectItem>
                </SelectContent>
              </Select>
              {formik.touched.paymentFrequency &&
                formik.errors.paymentFrequency && (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.paymentFrequency}
                  </div>
                )}
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Description
            </label>
            <Textarea
              name="description"
              placeholder="Please Write The Down The Full Description Of The Package"
              className="min-h-[120px] bg-[#1C1C1C] border-[#F2D679] text-white resize-none"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.description && formik.errors.description && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.description}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <p className="text-sm text-white">Upload Thumbnail Image</p>
            <label
              htmlFor="thumbnail"
              className="flex flex-col items-center justify-center w-full h-[120px] border-2 border-dashed rounded-lg cursor-pointer border-[#F2D679] bg-[#1C1C1C] hover:bg-[#2C2C2C] transition-colors"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                {formik.values.thumbnail ? (
                  <p className="text-sm text-[#F2D679]">
                    {(formik.values.thumbnail as File).name}
                  </p>
                ) : (
                  <ImageIcon className="w-8 h-8 text-[#F2D679]" />
                )}
              </div>
              <input
                id="thumbnail"
                name="thumbnail"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
            {formik.touched.thumbnail && formik.errors.thumbnail && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.thumbnail}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <Button
          type="submit"
          className="bg-[#F2D679] text-black hover:bg-[#F2D679]/90"
        >
          Create Package
        </Button>
      </div>
    </form>
  );
}
