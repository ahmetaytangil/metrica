export const workOrderModel = (data) => {
    const workOrder = (obj) => {
        return {
            priority: obj.ONCELIK || obj.priority || null,
            business_center: obj.ISMERKEZI || obj.business_center || null,
            material: obj.MALZEME || obj.material || null,
            stand: obj.TEZGAH || obj.stand || null,
            business_center_2: obj.ISMERKEZI1 || obj.business_center_2 || null,
            operation: obj.OPERASYON || obj.operation || null,
            number_of_work_orders: obj.ISEMRI_ADETI || obj.number_of_work_orders || null,
            number_of_customers: obj.MUSTERI_ADET || obj.number_of_customers || null,
            reducer_delivery: obj.REDUKTOR_TESLIM || obj.reducer_delivery || null,
            waiting_time: obj.BEKLEME_SAAT || obj.waiting_time || null,
            section: obj.BOLUMU || obj.section || null,
            order: obj.SIPARIS || obj.order || null,
            broadcasting: obj.YAYIN || obj.broadcasting || null,
            queue: obj.SIRA || obj.queue || null,
            operation_no: obj.OPERASYON_NO || obj.operation_no || null,
        }
    }

    return data?.constructor === Array
        ? data.length > 0
            ? data.map(obj => workOrder(obj))
            : null
        : data ? workOrder(data) : null
}