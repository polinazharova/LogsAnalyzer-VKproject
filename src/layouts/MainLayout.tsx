import './Main.styles.scss'
import RunningString from "../components/running-string/RunningString";
import SendingLogsForm from "../features/sending-logs-form/ui/form/Form";
import LogsViewer from "../components/logs-viewer/LogsViewer";
import { LogFilesProvider } from "../features/logs-viewer/context/LogFilesContext";
import { SelectedLogsTypeProvider } from "../features/logs-viewer/context/SelectedLogsTypeContext";
import { SelectedFileProvider } from "../features/logs-viewer/context/SelectedLogFileContext";
import { LogsMatchesProvider } from "../features/logs-viewer/context/LogsMathesContext";


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
