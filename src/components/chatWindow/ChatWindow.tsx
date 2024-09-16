import { FC } from "react";
import styles from "./ChatWindow.module.css";
import { RiSendPlane2Line } from "@remixicon/react";

// interface IChatWindowProps {
//     message: string;
//     isSender: boolean;
//     sentAt: string;
//     userName: string;
// }

const messages = [
    {
        message: "Hey! How's it going?",
        isSender: true,
        sentAt: "2024-09-16T08:30:00Z",
        userName: "John Doe"
    },
    {
        message: "I'm good, thanks! How about you?",
        isSender: false,
        sentAt: "2024-09-16T08:31:00Z",
        userName: "Jane Smith"
    },
    {
        message: "Doing well, just working on a project.",
        isSender: true,
        sentAt: "2024-09-16T08:32:30Z",
        userName: "John Doe"
    },
    {
        message: "That sounds interesting! What kind of project?",
        isSender: false,
        sentAt: "2024-09-16T08:33:45Z",
        userName: "Jane Smith"
    },
    {
        message: "It's a chat app, trying to add some new features.",
        isSender: true,
        sentAt: "2024-09-16T08:35:00Z",
        userName: "John Doe"
    },
    {
        message: "Nice! Let me know if you need help.",
        isSender: false,
        sentAt: "2024-09-16T08:36:20Z",
        userName: "Jane Smith"
    }
];

const ChatWindow: FC = () => {
    return (
        <div className={styles.chatWindow}>
            <div className={styles.messageContainer}>
                {
                    messages.map((message, index) => {
                        return (
                            <div className={`${styles.messageText} ${message.isSender ? styles.isSender : ""}`} key={index}>
                                {message.message}
                            </div>
                        );
                    })
                }
            </div>
            <div className={styles.chatInputBox}>
                <input type="text" placeholder="Message..." />
                <div className={styles.sendIcon}>
                    <RiSendPlane2Line />
                </div>
            </div>
        </div>
    )
}

export default ChatWindow;