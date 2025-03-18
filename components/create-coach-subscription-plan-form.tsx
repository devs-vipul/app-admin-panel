"use client";

import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  clientCap: Yup.number()
    .required("Client cap is required")
    .positive("Client cap must be positive")
    .integer("Client cap must be a whole number"),
  tag: Yup.string(),
  monthlyAmount: Yup.number()
    .required("Monthly amount is required")
    .positive("Amount must be positive"),
  yearlyAmount: Yup.number()
    .required("Yearly amount is required")
    .positive("Amount must be positive"),
  description: Yup.string().required("Description is required"),
});

export function CreateCoachSubscriptionPlanForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      clientCap: "",
      tag: "",
      monthlyAmount: "",
      yearlyAmount: "",
      description: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6 p-6 bg-black">
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-white text-sm">Name</label>
          <Input
            name="name"
            placeholder="Add Plan name"
            className="bg-black border-custom-gold text-white placeholder:text-zinc-500"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-xs">{formik.errors.name}</div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-white text-sm">Client Cap</label>
            <Input
              name="clientCap"
              type="number"
              placeholder="35"
              className="bg-black border-custom-gold text-white placeholder:text-zinc-500"
              value={formik.values.clientCap}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.clientCap && formik.errors.clientCap && (
              <div className="text-red-500 text-xs">
                {formik.errors.clientCap}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-white text-sm">Tag (Optional)</label>
            <Input
              name="tag"
              placeholder="Add Plan Tag"
              className="bg-black border-custom-gold text-white placeholder:text-zinc-500"
              value={formik.values.tag}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-white text-sm">Monthly Amount ($)</label>
            <Input
              name="monthlyAmount"
              type="number"
              placeholder="80"
              className="bg-black border-custom-gold text-white placeholder:text-zinc-500"
              value={formik.values.monthlyAmount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.monthlyAmount && formik.errors.monthlyAmount && (
              <div className="text-red-500 text-xs">
                {formik.errors.monthlyAmount}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-white text-sm">Yearly Amount ($)</label>
            <Input
              name="yearlyAmount"
              type="number"
              placeholder="800"
              className="bg-black border-custom-gold text-white placeholder:text-zinc-500"
              value={formik.values.yearlyAmount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.yearlyAmount && formik.errors.yearlyAmount && (
              <div className="text-red-500 text-xs">
                {formik.errors.yearlyAmount}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-white text-sm">Description</label>
          <Textarea
            name="description"
            placeholder="Please Write The Down The Description Of The Plans"
            className="min-h-[120px] bg-black border-custom-gold text-white resize-none placeholder:text-zinc-500"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.description && formik.errors.description && (
            <div className="text-red-500 text-xs">
              {formik.errors.description}
            </div>
          )}
        </div>
      </div>

      <Button
        type="submit"
        className="w-fit bg-custom-gold text-black hover:bg-custom-gold/90"
      >
        Create Coach&apos;s Plan
      </Button>
    </form>
  );
}
