/* 
 *  DIGITALX LABS(PVT)LTD PROPRIETARY AND CONFIDENTIAL INFORMATION SUBJECT TO NDA
 *  *
 *  Copyright © 2020. DIGITALX LABS(PVT)LTD
 *  All Rights Reserved.
 *  *
 *  NOTICE: All information contained herein is, and remains
 *  the property of DIGITALX LABS(PVT)LTD. The intellectual and technical concepts contained
 *  herein are proprietary to DIGITALX LABS(PVT)LTD.
 *  Dissemination of this information, reproduction of this material, and copying or distribution of this software
 *  is strictly forbidden unless prior written permission is obtained from DIGITALX LABS(PVT)LTD.
 */
import axios from 'axios';
import { BASE_URL } from '../config';
axios.defaults.baseURL = BASE_URL;

const setHeader = () => {
    let token = '';
    (typeof localStorage !== 'undefined') &&
        (token = `Bearer ${localStorage.getItem("token")}`)

    axios.defaults.headers.common['Authorization'] = token
}

export const request = async (method, endPoint, data) => {
    try {
        setHeader();
        const res = await axios({
            method: method,
            url: endPoint,
            ...(data && { data })
        })
        return res.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }

}
