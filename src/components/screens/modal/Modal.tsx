"use client";
import React, { useEffect, useState } from "react";
import styles from "./Modal.module.scss";
import Button from "@/components/ui/button/Button";
import { dataTest } from "@/data/data";
import BlockQuestion from "@/components/ui/blockQuestion/BlockQuestion";
import ColorRightUnswers from "@/components/ui/colorRightUnswers/ColorRightUnswers";
interface Props {
  isOpen: boolean;
  dataUnswers: (number | null)[];
  changeModal: () => void;
}
const Modal = ({ changeModal, isOpen, dataUnswers }: Props) => {
  const [modalContent, setModalContent] = useState<"confirm" | "result">(
    "confirm"
  );
  const [countRightUnswers, setCountRightUnswers] = useState<number>(0);
  useEffect(() => {
    dataTest.forEach((elem, id) => {
      if (elem.rightAnswer === dataUnswers[id]) {
        setCountRightUnswers((count) => count + 1);
      }
    });
  }, [modalContent]);
  if (!isOpen) return null;
  else if (modalContent === "confirm") {
    return (
      <div className={styles.modalBackdrop}>
        <div className={styles.modalContainer}>
          <div className={styles.question}>Завершить тест?</div>
          <div className={styles.rightUnswer}></div>
          <div className={styles.buttonContainer}>
            <Button onClick={changeModal}>Назад</Button>
            <Button onClick={() => setModalContent("result")}>Завершить</Button>
          </div>
        </div>
      </div>
    );
  } else if (modalContent === "result") {
    return (
      <div className={styles.modalBackdrop}>
        <div className={styles.modalContainer}>
          <div className={styles.resultsHeader}>Результаты теста</div>
          <div className={styles.questionsContainer}>
            {dataTest.map((elem, id) => (
              <BlockQuestion key={id} className={styles.isQuestion} isRight={elem.rightAnswer === dataUnswers[id]}>
                задание {id + 1}
              </BlockQuestion>
            ))}
          </div>
          <div className={styles.conclusion}>
            <p className={styles.baseConclusion}>Решено верно</p><ColorRightUnswers point={countRightUnswers} allPoint={dataUnswers.length}/>
            
          </div>
          <div className={styles.buttonContainer}>
            <Button onClick={changeModal}>Назад</Button>
            <Button onClick={() => window.location.reload()}>Начать заново</Button>
          </div>
        </div>

      </div>
    );
  }
};

export default Modal;
