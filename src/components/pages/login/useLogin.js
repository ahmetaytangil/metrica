import {useState} from "react";
import {prepareCompare, saveLocalStorage} from "../../../utils/helpers";
import {storageNames} from "../../../constants/storage_names";

export default function useLogin(users, storeUserDis, history) {
    const [error, setError] = useState("");

    const on = {
        async submit(event) {
            event.preventDefault();
            setError("");
            const elems = event.target.elements

            const body = {
                username: null,
                password: null
            }

            for (let i = 0; i < elems.length; i++) {
                if (elems[i].name === "username") {
                    body.username = elems[i].value
                }

                if (elems[i].type === "password") {
                    body.password = elems[i].value
                }
            }
            for (let i = 0; i < users.length; i++) {
                const B_USERNAME = prepareCompare(body.username);
                const B_PASSWORD = prepareCompare(body.password);

                const T_USERNAME = prepareCompare(users[i].name_surname)
                const T_PASSWORD = prepareCompare(users[i].password)

                if (B_USERNAME === T_USERNAME) {
                    if (B_PASSWORD === T_PASSWORD) {
                        await storeUserDis(users[i]);
                        await saveLocalStorage(users[i], storageNames.user);
                        history("/");
                    } else {
                        setError("Parolanız Yanlış");
                    }
                    break;
                } else if (i === users.length -1 ) {
                    setError("Kullanıcı Bulunamadı");
                }
            }

        }
    }

    return {
        on,
        error
    }
}