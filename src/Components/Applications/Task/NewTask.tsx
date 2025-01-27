import { Fragment } from "react";
import { CheckCircle } from "react-feather";
import { Button, Modal, ModalBody } from "reactstrap";
import { AddTask, NewTask } from "@/Constant/constant";
import { NewTaskModalForm } from "./NewTaskModalForm";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setAddModal } from "@/Redux/Reducers/TaskSlice";

const NewTaskClass = () => {
  const { addModal } = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();
  const addToggle = () => dispatch(setAddModal());

  return (
    <Fragment>
      <Button block color="primary" className="btn-mail w-100" onClick={addToggle}><CheckCircle className="me-2" />{NewTask}</Button>
      <Modal size="lg" isOpen={addModal} toggle={addToggle}>
        <div className="modal-header">
          <h4 className="modal-title">{AddTask}</h4>
          <Button close color="transprant" onClick={addToggle} />
        </div>
        <ModalBody>
          <NewTaskModalForm />
        </ModalBody>
      </Modal>
    </Fragment>
  );
};
export default NewTaskClass;
