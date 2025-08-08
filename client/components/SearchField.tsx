import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

interface SearchFieldProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function SearchField({
  placeholder = "Search...",
  value: controlledValue,
  onChange,
  onClear,
  className = "",
  size = "md",
}: SearchFieldProps) {
  const [internalValue, setInternalValue] = useState("");

  const isControlled = controlledValue !== undefined;
  const searchValue = isControlled ? controlledValue : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (isControlled) {
      onChange?.(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  const handleClear = () => {
    if (isControlled) {
      onChange?.("");
      onClear?.();
    } else {
      setInternalValue("");
      onClear?.();
    }
  };

  const sizeClasses = {
    sm: "h-8 text-sm",
    md: "h-10",
    lg: "h-12 text-lg",
  };

  const iconSizes = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  const paddingClasses = {
    sm: "pl-8 pr-8",
    md: "pl-10 pr-10",
    lg: "pl-12 pr-12",
  };

  return (
    <div className={`relative ${className}`}>
      <Search
        className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground ${iconSizes[size]}`}
      />
      <Input
        type="search"
        placeholder={placeholder}
        value={searchValue}
        onChange={handleChange}
        className={`${paddingClasses[size]} ${sizeClasses[size]} border-border bg-background/50 backdrop-blur-sm focus:border-primary focus:ring-primary/20 transition-all duration-200`}
      />
      {searchValue && (
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleClear}
          className={`absolute right-1 top-1/2 transform -translate-y-1/2 ${sizeClasses[size]} w-8 p-0 hover:bg-muted/50`}
        >
          <X className={iconSizes[size]} />
        </Button>
      )}
    </div>
  );
}
