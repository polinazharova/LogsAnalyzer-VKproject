import { useContext, useState } from 'react';
import { SelectedLogsTypeContext } from '../../../context/SelectedLogsTypeContext';
import './LogsTypeSelector.styles.scss'
import useLogsTypeSelectorHandlers from '../../../hooks/useLogsTypeSelectorHandlers';


const LogsTypeSelector: React.FC = () => {

    const {selectedLogsType, setSelectedLogsType} = useContext(SelectedLogsTypeContext);
    const [isSelectorItemsHidden, setIsSelectorItemsHidden] = useState<boolean>(true);

   useLogsTypeSelectorHandlers(setIsSelectorItemsHidden, setSelectedLogsType);

    return(
        <div className="main__logs-type-selector">
            <div className="main__logs-type-selector-label">{selectedLogsType}</div>
            <div className={`main__logs-type-selector-items${isSelectorItemsHidden ? " hidden" : ""}`}>
                <div className="main__logs-type-selector-item main__logs-type-selector-item_selected">ALL</div>
                <div className="main__logs-type-selector-item">ERROR</div>
                <div className="main__logs-type-selector-item">DEBUG</div>
                <div className="main__logs-type-selector-item">INFO</div>
            </div>
        </div>
    )
}

export default LogsTypeSelector;
