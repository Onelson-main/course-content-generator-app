import config from "../core/config";

export const baseUrl = config.baseUrl;

const getHeaders = (
    isSecure = false,
    extra = { ContentType: "application/json", Accept: "application/json" }
) => {
    const header = {
        Accept: extra.Accept,
        "Content-Type": extra.ContentType,
        Authorization: "",
    };

    if (isSecure == true) {
        // header.Authorization = `Bearer ${useUserStore().$state.token}`;
    }
    return header;
};

export const put = async (
    url: string,
    body = {},
    option = { loggedIn: false }
) => {
    try {
        const res = await fetch(baseUrl + url, {
            method: "PUT",
            headers: getHeaders(option.loggedIn),
            body: JSON.stringify(body),
        });
        return res;
    } catch (err) {
        console.log(err);
    }
};


export const post = async (
    url: string,
    body = {},
    option = { loggedIn: false }
) => {
    try {
        const res = await fetch(baseUrl + url, {
            method: "POST",
            headers: getHeaders(option.loggedIn),
            body: JSON.stringify(body),
        });
        return res;
    } catch (err) {
        console.log(err);
    }
};


export const get = async (
    url: string,
    option = { loggedIn: false }
) => {
    try {
        const res = await fetch(baseUrl + url, {
            method: "GET",
            headers: getHeaders(option.loggedIn),
        });
        return res;
    } catch (err) {
        console.log(err);
    }
};