import React, { useState } from "react";
import styles from './projects.module.css';

const Projects = () => {

    function moveLeft(){
        if(currImg===0){
            setImg(images.length-1);
        }
        else{
        setImg(currImg-1);
        }
    }
    function moveRight(){
        if(currImg === images.length-1){
            setImg(0);
        }
        else{
        setImg(currImg+1);
        }
    }
    
    const images = ['./Screenshot (30).png', './Screenshot (69).png', './Screenshot (81).png',
        './Screenshot (93).png', './Screenshot (96).png', './Screenshot (97).png'
    ];
    const [currImg, setImg] = useState(0);
//add count
    return (
        <div className={styles.sectionIII}>
            <h3 className={styles.heading}>Projects</h3>
            <div className={styles.imgContainer}>
                <img src={images[currImg]} alt="bootstrap" className={styles.image} />
                <div className={styles.right} onClick={moveRight}>⏩</div>
                <div className={styles.left} onClick={moveLeft}>⏪</div>
                <p className={styles.count}>{currImg+1}/{images.length}</p>
            </div>
        </div>
    )
}

export default Projects