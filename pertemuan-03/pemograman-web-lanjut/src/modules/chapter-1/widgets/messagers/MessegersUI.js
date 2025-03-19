import React from "react";
import { ButtonPrimary, ButtonSecondary } from "./components/ButtonUI";
export default function MessegersUI() {
    const StylesMessager = {
        chatBox: {
        minHeight: "200px",
        maxHeight: "45vh",
        overflowY: "auto",
        }
        };
    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title align-items-start flex-column">
                    <span className="fw-bold mb-2 text-gray-900">Chats</span>
                </h3>
                <div className="card-toolbar">
                    <ButtonSecondary items={{
                        title: "Create new chat",
                        btn_class: "btn-icon btn-clear",
                    }} >
                        <i className="bi bi-pencil-square"></i>
                    </ButtonSecondary>
                </div>
            </div>
            <div className="card-body p-0">
                <div
                    className="chat-message px-2 bg-light-primary"
                    style={StylesMessager.chatBox}
                >
                    ...
                </div>
                <div className="chat-send bg-light p-3">
                    <form method="post" autoComplete="off">
                        <div className="d-flex justify-content-between align-items-center">
                            <input type="text"
                                className="form-control me-2" autoFocus={true} />
                            <ButtonPrimary items={{
                                title: "Send",
                                btn_class: "btn-icon btn-success",
                                type: "submit"
                            }}
                            >
                                <i className="bi bi-send"></i>
                            </ButtonPrimary>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}