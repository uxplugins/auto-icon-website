import { atom } from "jotai";
export const IsModalOpenAtom = atom(false);
export const ModalItemAtom = atom({
  id: "",
  name: "",
  packName: "",
  source: "",
  pngSrc: "",
});
