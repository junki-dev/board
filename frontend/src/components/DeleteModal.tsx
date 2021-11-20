import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

// 모달 버튼 style
const ModalButton = styled.input`
  :hover {
    background-color: #d61a43;
  }
`;

// 모달 컨테이너 style
const ModalContainer = styled.div`
  width: 100%;
  height: 80%;
`;

// 모달 내용 style
const ModalContent = styled.p`
  height: 40px;
  margin: 13px 5px 0px 5px;
  width: 100%;
  letter-spacing: 0em;
  font-size: 26px;
`;

const Label = styled.label`
  width: 100%;
  font-size: 16px;
  margin-top: 10px;
  padding: 8px;
`;

const Input = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 6px;
  border: 1px solid;
  border-radius: 4px;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

// 모달 푸터 style
const ModalFooter = styled.div`
  margin-top: 20px;
  height: 10%;
  text-align: right;
`;

const ModalYesButton = styled.button`
  color: #6a706e;
  border: 2px solid #d61a43;
  border-radius: 25px;
  font-size: 1.3vw;
  padding: 8px 20px;
  background-color: transparent;
  margin-right: 8px;
  font-family: 'InfinitySansBold';

  :hover {
    cursor: pointer;
  }
`;

const ModalNoButton = styled.button`
  color: #6a706e;
  border: 2px solid #6a706e;
  border-radius: 25px;
  font-size: 1.3vw;
  padding: 8px 20px;
  background-color: transparent;
  font-family: 'InfinitySansBold';

  :hover {
    cursor: pointer;
  }
`;

// 모달 스타일
const customStyles = {
  overlay: {
    outline: 'none',
  },
  content: {
    top: '30%',
    left: '40%',
    right: '90%',
    bottom: '47%',
    marginRight: '-50%',
    borderRadius: '20px',
  },
};

interface ModalProps {
  name: string;
  response: (response: boolean) => void;
  changePassword: (passowrd: string) => void;
}

const CustomModal = ({ name, response, changePassword }: ModalProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false); // 모달 출력여부
  const [modalPassword, setModalPassword] = useState(``); // 비밀번호

  const handlePassword = (password: string) => {
    if (password.length > 4) {
      alert(`비밀번호는 숫자 4자리입니다.`);
    } else {
      setModalPassword(password);
      changePassword(password);
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = (res: boolean) => {
    setModalIsOpen(false);
    response(res);
  };

  return (
    <div>
      <ModalButton type="button" onClick={() => openModal()} value={name} className="fill-button" />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => closeModal(false)}
        contentLabel="Default Modal"
        style={customStyles}
        ariaHideApp={false}
      >
        <ModalContainer>
          <ModalContent>정말 삭제 하시겠습니까?</ModalContent>

          <Label>PASSWORD</Label>
          <Input type="number" value={parseInt(modalPassword) || ``} onChange={(e) => handlePassword(e.target.value)} />
          <ModalFooter>
            <ModalYesButton onClick={() => closeModal(true)}>Yes</ModalYesButton>
            <ModalNoButton onClick={() => closeModal(false)}>No</ModalNoButton>
          </ModalFooter>
        </ModalContainer>
      </Modal>
    </div>
  );
};

export default CustomModal;
