import { useEffect } from "react";

const useLogsTypeSelectorHandlers = (
  setIsSelectorItemsHidden: React.Dispatch<React.SetStateAction<boolean>>,
  setSelectedLogsType: React.Dispatch<React.SetStateAction<string>>,
) => {
  const handleSelectorClick = (): void => {
    setIsSelectorItemsHidden((prev) => !prev);
  };

  const handleSelectorItemClick = (event: Event): void => {
    event = event as MouseEvent;
    const item = event.target as HTMLElement;

    const prevSelectedItem = document.querySelector(
      ".main__logs-type-selector-item_selected",
    );

    if (prevSelectedItem) {
      prevSelectedItem.classList.remove(
        "main__logs-type-selector-item_selected",
      );
    }

    item.classList.add("main__logs-type-selector-item_selected");

    setSelectedLogsType(item.textContent as string);
    setIsSelectorItemsHidden(true);
  };

  useEffect(() => {
    const selector = document.querySelector(".main__logs-type-selector-label");
    const selectorItemArr = document.querySelectorAll(
      ".main__logs-type-selector-item",
    );

    if (selector && selectorItemArr) {
      selector.addEventListener("click", handleSelectorClick);

      selectorItemArr.forEach((item): void => {
        item.addEventListener("click", handleSelectorItemClick);
      });
    }

    return () => {
      if (selector && selectorItemArr) {
        selector.removeEventListener("click", handleSelectorClick);

        selectorItemArr.forEach((item) => {
          item.removeEventListener("click", handleSelectorItemClick);
        });
      }
    };
  }, []);
};

export default useLogsTypeSelectorHandlers;
