import React, { useState } from 'react';
import Modal from 'components/Junior/Modal'
function JuniorDetail() {

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>모달팝업</button>
      <Modal open={modalOpen} close={closeModal} header="미팅 예약">
        모달 입력
      </Modal>
    </div>
  );
}

export default JuniorDetail;