import React from "react";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const EditBtn = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
          <DotsVerticalIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-16 cursor-pointer">
        <DropdownMenuCheckboxItem className="cursor-pointer">Delete</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem disabled className="cursor-pointer">Edit</DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default EditBtn;