import { Button, Modal } from "react-bootstrap";

export interface ModalProps {
  show: boolean;
  handleClose: () => void;
  title: string;
}

export const ModalTeddy: React.FC<ModalProps> = ({
  show,
  handleClose,
  children,
  title,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Voltar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
