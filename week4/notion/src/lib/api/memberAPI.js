import axios from 'axios';

// const url = 'http://127.0.0.1:5000/api/members';
const url = 'http://ec2-13-124-127-8.ap-northeast-2.compute.amazonaws.com:3000/api/members';

const getMembers = async () => {
    try {
        const { data } = await axios.get(`${url}`);
        console.log('[SUCCESS] GET MEMBERS', data);
        return data.data;
    } catch (e) {
        console.error('[FAIL] GET MEMBERS', e);
        return e;
    }
}

const getMember = async (id) => {
    try {
        const { data } = await axios.get(`${url}/${id}`);
        console.log('[SUCCESS] GET MEMBER', data);
        return data.data;
    } catch (e) {
        console.error('[FAIL] GET MEMBER', e);
        throw(e);
    }
}

const createMember = async(object) => {
    try {
        const { data } = await axios.post(`${url}`,object);
        console.log('[SUCCESS] CREATE MEMBER', data);
        return data.data;
    } catch (e) {
        console.error('[FAIL] CREATE MEMBER', e);
        throw(e);
    }
}

const removeMember = async(id) => {
    try {
        const { data } = await axios.delete(`${url}/${id}`);
        console.log('[SUCCESS] DELETE MEMBER', data);
        return data.data;
    } catch (e) {
        console.error('[FAIL] DELETE MEMBER', e);
        throw(e);
    }
}

const updateMember = async (id, object) => {
    try {
        const { data } = await axios.put(`${url}/${id}`,object);
        console.log('[SUCCESS] UPDATE MEMBER', data);
        return data.data;
    } catch (e) {
        console.error('[FAIL] UPDATE MEMBER', e);
        throw(e);
    }
}
export {
    getMembers,
    getMember,
    createMember,
    removeMember,
    updateMember,
};