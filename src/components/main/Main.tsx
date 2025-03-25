import RunningString from "../running-string/RunningString";
import SendingLogsForm from "../forms/sending-logs-form/SendingLogsForm";
import './Main.styles.scss'
import { LogFilesProvider } from "../../context/LogFilesContext";
import { SelectedLogsTypeProvider } from "../../context/SelectedLogsTypeContext";
import { SelectedFileProvider } from "../../context/SelectedLogFileContext";
import LogsViewer from "../logs-viewer/LogsViewer";

const Main: React.FC = () => {
    return(
        <main id="main">
            <RunningString />
            <LogFilesProvider>
                <SendingLogsForm />
                <SelectedLogsTypeProvider>
                    <SelectedFileProvider>
                        <LogsViewer />
                    </SelectedFileProvider>
                </SelectedLogsTypeProvider>
            </LogFilesProvider>
        </main>
    )
}

export default Main;
