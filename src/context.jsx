import { createContext, useState } from "react";
import { API_BASE_URL } from "./config";
import { getAuthRequest, getRequest, getRequestParams, postAuthRequest, postRequest } from "./SelfModule/api/Apis";
import { toast } from "react-toastify";

const DataContext = createContext();

const DataProviderFuncComp = ({ children }) => {
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState(sessionStorage.getItem('token'));
    const [isLoginPopUp, setIsLoginPopUp] = useState(false);
    const [registerPopUp, setRegisterPopUp] = useState(false);
    const [chatBotPopUp, setChatBotPopup] = useState(false);
    const [logoutBtn, setLogoutBtn] = useState(false);
    const [userInfo, setUserInfo] = useState(false);
    const [askContentPost, setAskContentPost] = useState(false);
    const [categories, setCategories] = useState();

    const getSessionFunc = async () => {
        try {
            const refreshToken = sessionStorage.getItem('token');
            if (refreshToken != undefined) {
                setRefreshToken(refreshToken);
            }
            else {
                setRefreshToken(false);
            }
            if (!refreshToken) {
                setRefreshToken(false);
                return;
            }
            const data = await postRequest('re-issue-access-token', {
                refrehToken: refreshToken
            }, false);

            if (data.error == "Invalid Session") {
                sessionStorage.removeItem('token');
                setAccessToken(false);
                setRefreshToken(false);
                toast.error("Session Expired !!", { position: 'center' });
            }

            setUserInfo(data.my_user);
            setAccessToken(data.accessToken);
        } catch (error) {
            console.log(error);
        }
    }

    const logoutFunc = async () => {
        try {
            setLogoutBtn(true);
            await getSessionFunc();
            if ((!accessToken) || (accessToken == undefined)) {
                setLogoutBtn(false);
                return;
            }
            const data = await postAuthRequest('logout', {}, accessToken);
            if (data.message) {
                sessionStorage.removeItem('token');
                setRefreshToken(false);
                setAccessToken(false);
            }
        }
        catch (err) {
            console.log(err);
            toast.error("Internet Connection Lost", { position: "top-center" });
        } finally {
            setLogoutBtn(false);
        }
    }


    const getCategoriesFunc = async () => {
        try {
            const data = await getRequest('categories');
            const categories_data = data.data.map((element, index) => {
                return {
                    label: element.name,
                    value: element._id
                }
            });
            setCategories(categories_data);
        }
        catch (error) {
            console.log(error);
        }
    }


    const munnaBotFunc = async (user_prompt, setResponse) => {
        const data = await postRequest('munnabot', {
            user_prompt
        }, false, 1);
        setResponse(data);
    }

    const getData = async (route, setData) => {
        try {
            const result = await getRequest(route);
            setData(result);
        }
        catch (error) {
            console.log(error);
        }
    }


    const getDataParams = async (route, setData, params = false) => {
        try {
            if (route != 'search') {
                setData()
            }
            const result = await getRequestParams(route, params);
            console.log(result);
            setData(result);
        }
        catch (error) {
            console.log(error);
        }
    }


    return <DataContext.Provider value={{
        accessToken,
        setAccessToken,
        isLoginPopUp,
        setIsLoginPopUp,
        registerPopUp,
        setRegisterPopUp,
        chatBotPopUp,
        setChatBotPopup,
        setRefreshToken,
        refreshToken,
        logoutFunc,
        getSessionFunc,
        logoutBtn,
        setAskContentPost,
        userInfo,
        setUserInfo,
        askContentPost,
        getCategoriesFunc,
        categories,
        munnaBotFunc,
        getData,
        getDataParams
    }}>
        {children}
    </DataContext.Provider>
}

export { DataContext, DataProviderFuncComp };