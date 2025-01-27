import { useAppSelector } from "@/Redux/Hooks";
import { ToastContainer } from "react-toastify";
import { Card, CardHeader } from "reactstrap";
import { FileContentButtonActions } from "./FileContentButtonActions";
import FileMainContent from "./FileMainContent";
import SearchBar from "./SearchBar";
import SearchNotFoundClass from "@/CommonComponent/SearchNotFound/SearchNotFoundClass";

const FileContent = () => {
  const { myFile, searchTerm } = useAppSelector((state) => state.fileManager);

  const fileList = myFile.filter((data) => {
    if (searchTerm == null) return data;
    if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) return data
  });

  return (
    <Card>
      <CardHeader>
        <div className="d-md-flex d-sm-block">
          <SearchBar />
          <FileContentButtonActions />
        </div>
      </CardHeader>
      {fileList.length ? <FileMainContent fileList={fileList} /> : <SearchNotFoundClass word="File" /> }
      <ToastContainer />
    </Card>
  );
};

export default FileContent;
