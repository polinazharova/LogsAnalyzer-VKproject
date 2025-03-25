import './NoFilesChosen.styles.scss'
import addFileIcon from '../../assets/add-file-icon.png'

const NoFilesChosen : React.FC = ()  => {
    return (
        <div className="main__no-files-chosen">
            <div className="main__no-files-chosen-text">No files has chosen yet</div>
            <img className="main__no-files-chosen-icon" src={addFileIcon} alt="add file icon from flaticon.com" />
        </div>
    )
}

export default NoFilesChosen;