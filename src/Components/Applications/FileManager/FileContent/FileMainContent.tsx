import { CardBody } from "reactstrap";
import QuickAccess from "./QuickAccess";
import { FolderSection } from "./FolderSection";
import FileList from "./FileList";
import { useAppSelector } from "@/Redux/Hooks";
import { Files } from "@/Constant/constant";
import { FileMainContentPropsType } from "@/Types/FileManagerType";

const FileMainContent :React.FC<FileMainContentPropsType> = ({ fileList }) => {
  const { searchTerm } = useAppSelector((state) => state.fileManager);

  return (
    <CardBody className="file-manager">
      {!searchTerm && (
        <>
          <QuickAccess />
          <FolderSection />
        </>
      )}
      <h5 className="mt-4">{Files}</h5>
      <FileList myFile={fileList}/>
    </CardBody>
  );
};

export default FileMainContent;
