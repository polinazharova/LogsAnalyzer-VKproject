import './Main.styles.scss'
import RunningString from "../components/running-string/RunningString";
import SendingLogsForm from "../features/sending-logs-form/ui/SendingLogsForm";
import LogsViewer from "../components/logs-viewer/LogsViewer";
import { LogFilesProvider } from "../context/LogFilesContext";
import { SelectedLogsTypeProvider } from "../context/SelectedLogsTypeContext";
import { SelectedFileProvider } from "../context/SelectedLogFileContext";
import { LogsMatchesProvider } from "../context/LogsMathesContext";


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
