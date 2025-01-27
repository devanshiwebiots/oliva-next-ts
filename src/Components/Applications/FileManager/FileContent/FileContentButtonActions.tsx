import { Button, Form, Input } from "reactstrap";
import { PlusSquare, Upload } from "react-feather";
import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "@/Redux/Hooks";
import { getFile, onFileUpload } from "@/Redux/Reducers/FileManagerSlice";
import { AddNew, UploadFile } from "@/Constant/constant";

export const FileContentButtonActions = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const dispatch = useAppDispatch();

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) setSelectedFile(files[0]);
  };
  
  return (
    <div className="flex-grow-1 text-end">
      <Form className="d-inline-flex" method="POST" name="myForm">
        <Button color="primary" onClick={() => dispatch(getFile())}><PlusSquare />{AddNew}</Button>
        <div style={{ height: "0px", width: "0px", overflow: "hidden" }}>
          <Input id="upfile" type="file" multiple onChange={(e) => onFileChange(e)} />
        </div>
      </Form>
      <Button outline color="primary" className="ms-2" onClick={() => dispatch(onFileUpload(selectedFile))}><Upload />{UploadFile}</Button>
    </div>
  );
};