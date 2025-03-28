import { useEffect } from "react";

type UseLogFileSelectorHandlersParams = {
    setIsSelectorLogFilesHidden : React.Dispatch<React.SetStateAction<boolean>>,
    setSelectedFile: React.Dispatch<React.SetStateAction<string>>,
};

const useLogFileSelectorHandlers = ({
    setIsSelectorLogFilesHidden,
    setSelectedFile
}: UseLogFileSelectorHandlersParams) => {

    const handleSelectorClick  = () : void => {
        setIsSelectorLogFilesHidden(prev => !prev);
    }

    const handleSelectorItemClick = (event: Event) : void => {
        event = event as MouseEvent;
        const item = event.currentTarget as HTMLDivElement;

        if (item.textContent) {
            setSelectedFile(item.textContent as string)
        } else {
            setSelectedFile('null');
        }

        const isSameItem = item.classList.contains('main__log-file-selector-item_selected');
        if (isSameItem) {
            setIsSelectorLogFilesHidden(true);
            return;
        }

        const prevSelectedItem = document.querySelector('.main__log-file-selector-item_selected');
        if (prevSelectedItem) {
            prevSelectedItem.classList.remove('main__log-file-selector-item_selected');
        }

        item.classList.add('main__log-file-selector-item_selected');
        
        setIsSelectorLogFilesHidden(true);
    }

    useEffect(() => {
        const selector = document.querySelector('.main__log-file-selector-label');
        const selectorItems = document.querySelectorAll('.main__log-file-selector-item');

        if (selector && selectorItems) {
            selector.addEventListener('click', handleSelectorClick);

            selectorItems.forEach((item) : void => {
                item.addEventListener('click', handleSelectorItemClick);
            }) 
        }
        
        return () => {
            if (selector && selectorItems) {
                selector.removeEventListener("click", handleSelectorClick);

                selectorItems.forEach((item) => {
                    item.removeEventListener("click", handleSelectorItemClick);
                });
            }
        };
    }, [])
}

export default useLogFileSelectorHandlers;