import { FC, useEffect, useState } from "react";
import Drawer from "@/components/Drawer";
import { PlayList } from "./Content";
import { PlayListTriggerBtn } from "../../Button";
import { useNonNullableContext } from "@/hooks/useNonNullableContext";
import { audioPlayerStateContext } from "@/components/AudioPlayer/Context/StateContext";

export const SortablePlayList: FC = () => {
  const { activeUI } = useNonNullableContext(audioPlayerStateContext);
  const [isOpen, setIsOpen] = useState(activeUI.playListOpen || false);

  useEffect(() => {
    setIsOpen(activeUI.playListOpen || false);
  }, [activeUI.playListOpen]);

  return (
    <Drawer onOpenChange={setIsOpen}>
      {!isOpen && (
        <Drawer.Trigger>
            <PlayListTriggerBtn isOpen={isOpen} />
        </Drawer.Trigger>
      )}
      <Drawer.Content>
        <PlayList isOpen={isOpen} setIsOpen={setIsOpen} />
      </Drawer.Content>
    </Drawer>
  );
};
