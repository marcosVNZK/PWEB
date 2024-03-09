import react from "react";
import Image from "next/image";
import styles from './headerStyle.module.css'
import { AiOutlineSearch, AiOutlineStar } from 'react-icons/ai'

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.searchbar}>
                    <AiOutlineSearch className={styles.icon}/>
                    <input type='search' placeholder="Search..."/>
                </div>

                <div className={styles.user}>
                    <div className={styles.buttons}>
                        <button> <AiOutlineStar/> Star </button>
                        <p>47</p>
                    </div>

                    <Image src='/userImage.webp' alt="user image" width={100} height={100}/>
                </div>
            </header>
        </>
    )
}
