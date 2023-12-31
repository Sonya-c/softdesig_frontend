export const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);

export const handleChange = (setFormData, event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
    }));
};

export const toUserData = (data) => {
    return {
        "doc": data.gov_id,
        "docType": data.id_type,
        "names": data.names,
        "lastnames": data.lastnames,
        "gender": data.gender,
        "birthDate": data.birth_date,
        "email": data.email,
        "phone": data.phone,
        "profileImage": data.profile_image,
    }
}

export const fromUserData = (userData) => {
    return {
        "gov_id": userData.doc,
        "id_type": userData.docType,
        "names": userData.names,
        "lastnames": userData.lastnames,
        "gender": userData.gender,
        "birth_date": userData.birthDate,
        "email": userData.email,
        "phone": userData.phone,
        "profile_image": userData.profileImage,
    }
}