import {$store} from "@/main";
import Axios from "axios"

const forceFileDownload = (response: any, filename: string) => {
    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', filename) // or any other extension
    document.body.appendChild(link)
    link.click()
};

const $can = (pAuthorities:String[]): boolean => {
    const authorities = $store.getters["@hh.HH/authorities"];
    return (authorities.some((elem: any) => pAuthorities.includes(elem)));
  }

const downloadWithVueResource = (url: string): void => {
    const token = localStorage.token;
    Axios({
        method: 'get',
        url,
        responseType: 'arraybuffer',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then((response: any) => {
            const fileName = `${url.split("/")[4]}`;
            forceFileDownload(response, fileName)
        })
        .catch(() => console.log('error occured'))

};

export { downloadWithVueResource, $can };