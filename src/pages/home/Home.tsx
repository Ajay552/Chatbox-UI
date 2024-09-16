import { FC } from "react";
import Header from "../../components/header/Header";
import styles from "./Home.module.css";
import { RiSearchLine } from "@remixicon/react";
import ChatWindow from "../../components/chatWindow/ChatWindow";
interface IUser {
    id: string;
    name: string;
    profileImage: string;
}

const contacts: IUser[] = [
    {
        id: '1',
        name: "Person 1",
        profileImage: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1725851943~exp=1725855543~hmac=594e248c876ff532cf892db07f09431f15399729bf9d853a19a555ec0d451845&w=826",
    },
    {
        id: '2',
        name: "Person 2",
        profileImage: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1725851943~exp=1725855543~hmac=594e248c876ff532cf892db07f09431f15399729bf9d853a19a555ec0d451845&w=826",
    },
    {
        id: '3',
        name: "Person 3",
        profileImage: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1725851943~exp=1725855543~hmac=594e248c876ff532cf892db07f09431f15399729bf9d853a19a555ec0d451845&w=826",
    },
    {
        id: '4',
        name: "Person 4",
        profileImage: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1725851943~exp=1725855543~hmac=594e248c876ff532cf892db07f09431f15399729bf9d853a19a555ec0d451845&w=826",
    },
    {
        id: '5',
        name: "Person 5",
        profileImage: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1725851943~exp=1725855543~hmac=594e248c876ff532cf892db07f09431f15399729bf9d853a19a555ec0d451845&w=826",
    },
];

const Home: FC = () => {
    return (
        <div className={styles.home}>
            <Header title="Chat Box" />
            <div className={styles.chatsContainer}>
                <div className={styles.contact}>
                    <h2>Contacts</h2>
                    <div className={styles.searchbar}>
                        <RiSearchLine size={25} />
                        <input type="text" placeholder="Search Contacts..." />
                    </div>
                    <div className={styles.contactsList}>
                        {
                            contacts.map(contact => {
                                return (
                                    <div className={styles.people} key={contact.id}>
                                        <img src={contact.profileImage} alt={`${contact.name} image`} />
                                        <span>{contact.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <ChatWindow />
            </div>
        </div>
    );
}

export default Home;