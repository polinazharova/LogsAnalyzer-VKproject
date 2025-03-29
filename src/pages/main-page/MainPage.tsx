import MainLayout from "../../layouts/MainLayout";
import RunningString from "../../components/running-string/RunningString";
import SendingLogsForm from "../../features/sending-logs-form/ui/form/Form";
import { LogFilesProvider } from "../../features/logs-viewer/context/LogFilesContext";
import { SelectedLogsTypeProvider } from "../../features/logs-viewer/context/SelectedLogsTypeContext";
import { SelectedFileProvider } from "../../features/logs-viewer/context/SelectedLogFileContext";
import { LogsMatchesProvider } from "../../features/logs-viewer/context/LogsMathesContext";
import LogsViewer from "../../features/logs-viewer/ui/viewer/LogsViewer";

const MainPage: React.FC = () => {
    return(
        <MainLayout>
            <RunningString content="This is a project for VK Education" />
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
        </MainLayout>
    )
}

export default MainPage;
