import RunningString from "../running-string/RunningString";
import SendingLogsForm from "../../features/sending-logs-form/ui/SendingLogsForm";
import './Main.styles.scss'
import { LogFilesProvider } from "../../context/LogFilesContext";
import { SelectedLogsTypeProvider } from "../../context/SelectedLogsTypeContext";
import { SelectedFileProvider } from "../../context/SelectedLogFileContext";
import { LogsMatchesProvider } from "../../context/LogsMathesContext";
import LogsViewer from "../logs-viewer/LogsViewer";

const Main: React.FC = () => {
    return(
        <main id="main">
            <RunningString />
            <LogFilesProvider>
                <SendingLogsForm />
                <SelectedLogsTypeProvider>
                    <SelectedFileProvider>
                        <LogsMatchesProvider>
                            <LogsViewer />
                        </LogsMatchesProvider>
                    </SelectedFileProvider>
                </SelectedLogsTypeProvider>
            </LogFilesProvider>
        </main>
    )
}

export default Main;
