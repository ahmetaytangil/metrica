export const lastWorksModel = (data) => {
    const lastWorks = (obj) => {
        return {
            type: obj.TIP || null,
            work_order: obj.ISEMRI || null,
            broadcasting: obj.YAYIN || null,
            queue: obj.SIRA || null,
            id_no: obj.KIMLIK_NO || null,
            solid: obj.SAGLAM || null,
            scrap: obj.HURDA || null,
            active_cutting_time: obj.AKTIF_KESME_SURESI || null,
            starting_date: obj.BASLANGIC_TARIHI || null,
            ending_date: obj.BITIS_TARIHI || null,
            status: obj.DURUM || null,
        }
    }

    return data?.constructor === Array ? data?.map(obj => lastWorks(obj)) : lastWorks(data) || null
}