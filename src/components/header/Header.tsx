import { RiSettings4Line } from "@remixicon/react";
import { FC } from "react";
import styles from "./Header.module.css";

interface IHeaderProps {
    title: string;
}

const Header: FC<IHeaderProps> = ({ title }) => {
    return (
        <header className={styles.header}>
            <h1>{title}</h1>
            <RiSettings4Line size={30} />
        </header>
    );
}

export default Header;