import { FC, useState } from "react";
import Drawer from "@/components/Drawer";
import { PlayList } from "./Content";

export const SortablePlayList: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <Drawer onOpenChange={setIsOpen}>
      <Drawer.Content>
        <PlayList isOpen={isOpen} setIsOpen={setIsOpen} />
      </Drawer.Content>
    </Drawer>
  );
};
