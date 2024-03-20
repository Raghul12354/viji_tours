import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DateCompProps {
  nameProp: string;
  dateProp: (date: Date) => void; // Callback function to pass selected date to parent
}

export function StartDate({ nameProp, dateProp }: DateCompProps) {
  const [date, setDate] = React.useState<Date>(new Date()); // Initialize with the current date

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      // console.log("Selected Startdate:", selectedDate);
      setDate(selectedDate);
      dateProp(selectedDate);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full border-b-2 border-t-0 border-l-0 border-r-0 justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "dd/MM/yyyy") : <span>{nameProp}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="flex w-auto flex-col space-y-2 p-2"
      >
        <Select
          onValueChange={(value: any) =>
            setDate(addDays(new Date(), parseInt(value)))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="3">In 3 days</SelectItem>
            <SelectItem value="7">In a week</SelectItem>
            <SelectItem value="14">In 2 weeks</SelectItem>
          </SelectContent>
        </Select>
        <div className="rounded-md border">
          <Calendar className="focus:bg-none" mode="single" selected={date} onSelect={handleDateSelect} />
        </div>
      </PopoverContent>
    </Popover>
  );
}
