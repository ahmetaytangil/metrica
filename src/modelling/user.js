export const userModel = (data) => {
    const user = (obj) => {
        return {
            name_surname: obj?.AD_SOYAD || obj.name_surname || null,
            password: obj.SIFRE || obj.password || null,
            id_no: obj.KIMLIK_NO || obj.id_no || null,
            section: obj.BOLUM || obj.section || null,
            business_center: obj.ISMERKEZI || obj.business_center || null,
            machine_no: obj.MAKINA_NO || obj.machine_no || null,
            company: obj.FIRMA ||obj.company ||  null
        }
    }

    return data === null ? null : data?.constructor === Array ? data?.map(obj => user(obj)) : user(data) || null
}