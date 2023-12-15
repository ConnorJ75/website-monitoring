import axios from "axios";

export const checkURL = async (url: string, config = {}) => {
    try{
        const response = await axios.get(url, config);
        await response.data;
        if (response.status === 200){
            console.log(url, 'Okay');
        }
        else{
            console.log(url, 'NOT OKAY');
        }
    }
    catch(e: any){
        console.log(url, e.code);
    }
}