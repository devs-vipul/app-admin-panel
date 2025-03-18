"use client";

import { useFormik } from "formik";
import * as Yup from "yup";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  amount: Yup.number()
    .required("Subscription amount is required")
    .positive("Amount must be positive"),
  duration: Yup.number()
    .required("Duration is required")
    .positive("Duration must be positive"),
  description: Yup.string().required("Description is required"),
});

export function CreateUserSubscriptionPlanForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      amount: "",
      duration: "",
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
          <label className="block text-sm font-medium text-white mb-2">
            Name
          </label>
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
            <label className="block text-sm font-medium text-white mb-2">
              Subscription Amount ($)
            </label>
            <Input
              name="amount"
              type="number"
              placeholder="100"
              className="bg-black border-custom-gold text-white placeholder:text-zinc-500"
              value={formik.values.amount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.amount && formik.errors.amount && (
              <div className="text-red-500 text-xs">{formik.errors.amount}</div>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-white mb-2">
              Duration (Month)
            </label>
            <Input
              name="duration"
              type="number"
              className="bg-black border-custom-gold text-white placeholder:text-zinc-500"
              value={formik.values.duration}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.duration && formik.errors.duration && (
              <div className="text-red-500 text-xs">
                {formik.errors.duration}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-white mb-2">
            Description
          </label>
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
        Create User&apos;s Plan
      </Button>
    </form>
  );
}
