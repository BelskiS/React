import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import BtnSite from '@components/BtnSite/btnSite';

import style from './modal.module.scss';
import FormModal from '@components/Forms/FormModal/formModal';



function ModalSite(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <BtnSite
            className={`${style.btnLink} site_link ${props.className}`}
            text={props.textBtn}
            onClick={handleShow}
            type="button"
            icoName={props.icoName}
            viewLink={props.viewLink ? true : false}
            classNameText={props.classNameText}
        />

        <Modal className={`modal_site ${style.mdl} ${props.mdlBigSize ? 'modal_bigS' : ''}`}
          show={show}
          onHide={handleClose}
          centered>
          <Modal.Header closeButton>
            <Modal.Title bsPrefix={style.title}>{props.modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body bsPrefix={style.body}>
            {props.modalDescription ? 
              <div className={style.description}>{props.modalDescription}</div>
            : ''}
            <FormModal
              mdlClose={handleClose}
              classAgreement_check={style.agreement_checkbox}
              fieldModal='modal_field'
              {...props}
            />
          </Modal.Body>
        </Modal>
      </>
    )
}

export default ModalSite;