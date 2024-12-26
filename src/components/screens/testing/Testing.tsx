"use client";
import { useState } from "react";
import styles from "./Testing.module.scss";
import { dataTest } from "@/data/data";
import { changeMassive } from "@/utils/utils";
import Modal from "../modal/Modal";
import Button from "@/components/ui/button/Button";

const Testing = () => {
  const [stateAnswers, setStateAnswers] = useState<(number | null)[]>(
    new Array(dataTest.length).fill(null)
  );

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);
  console.log(modal);
  function changeModal() {
    setModal(false);
  }
  function changePrev() {
    setCurrentQuestion(currentQuestion - 1);
  }
  function changeNext() {
    setCurrentQuestion(currentQuestion + 1);
  }
  function changeUnswer(unswer: number) {
    setStateAnswers(changeMassive(stateAnswers, currentQuestion, unswer));
  }
  return (
    <div className={styles.mainContainer}>
      <div className={styles.questionBlocks}>
        {stateAnswers.map((elem, id) => {
          if (id === currentQuestion) {
            return <div key={id} className={styles.currentBlock}></div>;
          } else {
            return (
              <div
                key={id}
                className={elem !== null ? styles.activeBlock : styles.block}
              ></div>
            );
          }
        })}
      </div>
      <div className={styles.question}>
        {dataTest[currentQuestion].question}
      </div>
      <div className={styles.imageSignContainer}>
        <img
          className={styles.imageSign}
          src={dataTest[currentQuestion].image}
          alt=""
        />
      </div>
      <div className={styles.answers}>
        {dataTest[currentQuestion].answer.map((elem, id) => {
          return (
            <button
              onClick={() => changeUnswer(id)}
              key={id}
              className={`${styles.answerBlock} ${
                stateAnswers[currentQuestion] === id
                  ? styles.answerBlockActive
                  : null
              }`}
            >
              {elem}
            </button>
          );
        })}
      </div>
      <div className={styles.buttonsChangeQuestion}>
        <Button
          disabled={currentQuestion === 0}
          style={currentQuestion === 0 ? { opacity: "0.2",cursor:'default' } : undefined}
          onClick={changePrev}
        >
          Назад
        </Button>

        {currentQuestion === stateAnswers.length - 1 ? (
          <Button onClick={() => setModal(true)}>Завершить тест</Button>
        ) : (
          <Button onClick={changeNext}>Дальше</Button>
        )}

        <Modal
          changeModal={changeModal}
          isOpen={modal}
          dataUnswers={stateAnswers}
        />
      </div>
    </div>
  );
};

export default Testing;
