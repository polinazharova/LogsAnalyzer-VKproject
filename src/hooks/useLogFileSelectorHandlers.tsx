import { useEffect } from "react";

const useLogFileSelectorHandlers = (setIsSelectorLogFilesHidden : React.Dispatch<React.SetStateAction<boolean>>, setSelectedFile: React.Dispatch<React.SetStateAction<string>>) => {

    const handleSelectorClick  = () : void => {
        setIsSelectorLogFilesHidden(prev => !prev);
    }

    const handleSelectorItemClick = (event: Event) : void => {
        const prevSelectedItem = document.querySelector('.main__log-file-selector-item_selected');

        if (prevSelectedItem) {
            prevSelectedItem.classList.remove('main__log-file-selector-item_selected');
        }

        event = event as MouseEvent;
        const item = event.currentTarget as HTMLDivElement;

        item.classList.add('main__log-file-selector-item_selected');

        if (item.textContent) {
            setSelectedFile(item.textContent as string)
        } else {
            setSelectedFile('null');
        }
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