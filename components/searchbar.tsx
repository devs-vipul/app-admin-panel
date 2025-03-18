import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface SearchbarProps {
  className?: string;
  submitButton?: boolean;
  inputProps?: {
    type?: string;
    placeholder?: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
  };
  buttonProps?: {
    text?: string;
    className?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
  };
}

const Searchbar = ({
  className,
  submitButton = false,
  inputProps = {},
  buttonProps = {},
}: SearchbarProps) => {
  const {
    type = "text",
    placeholder = "Search",
    className: inputClassName = "text-white",
    onChange,
    value,
  } = inputProps;

  const {
    text = "Go",
    className: buttonClassName = "text-black custom-primary-color",
    onClick,
    icon,
  } = buttonProps;

  return (
    <div
      className={cn("flex flex-row max-w-xl justify-start gap-4", className)}
    >
      <Input
        type={type}
        placeholder={placeholder}
        className={inputClassName}
        onChange={onChange}
        value={value}
      />
      {submitButton && (
        <Button className={buttonClassName} type="submit" onClick={onClick}>
          {icon && <span>{icon}</span>}
          {text}
        </Button>
      )}
    </div>
  );
};

export default Searchbar;
