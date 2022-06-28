export const base_url = "https://api.yr.com.tr";

export const PATHS = {
    fault_list: "/api/Ariza/arizalistesi",
    admins: "/api/Personel/tumpersoneller",
    work_order: "/api/IsEmri/isemrilistesi",
    work_order_filter:
        (section, material, business_center, stand) =>
            `/api/IsEmri/getallisemri/${section}/${material}/${business_center}/${stand}`,
    last_works:
        (work_order, broadcasting, queue, operation_no) =>
            `/api/Liste/sonislerlistesi?isemri=${work_order}&yayin=${broadcasting}&sira=${queue}&operasyon_no=${operation_no}`,
    start_preliminary:
        (order, broadcasting, queue, operation_no, id_no, machine_no) =>
            `/api/OnHazirlik/onhazirlikbasla?isemri=${order}&yayin=${broadcasting}&sira=${queue}&operasyonno=${operation_no}&kimlik_no=${id_no}&makine_no=${machine_no}`,
    stop_preliminary:
        (order, broadcasting, queue, status, machine_no, operation_no, id_no) =>
            `/api/OnHazirlik/onhazirlikbitir?isemri=${order}&yayin=${broadcasting}&sira=${queue}&durum=${status}&makine_no=${machine_no}&operasyon_no=${operation_no}&kimlik_no=${id_no}`,
    current_preliminary:
        (machine_no) =>
            `/api/OnHazirlik/aktifonhazirlikis/${machine_no}`,
    start_operation:
        (order, broadcasting, queue, operation_no, id_no, machine_no) =>
            `/api/Operasyon/operasyonbasla?isemri=${order}&yayin=${broadcasting}&sira=${queue}&operasyonno=${operation_no}&kimlik_no=${id_no}&makine_no=${machine_no}`,
    stop_operation:
        (solid_piece, scrap_pieces, active_cutting_time, where_status, set_durum, order, broadcasting, queue, operation_no, machine_no, id_no) =>
            `/api/Operasyon/operasyonbitir?saglam=${solid_piece}&hurda=${scrap_pieces}&aktif_kesme_suresi=${active_cutting_time}&where_durum=${where_status}`
            + `&set_durum=${set_durum}&isemri=${order}&yayin=${broadcasting}&sira=${queue}&operasyon_no=${operation_no}&makine_no=${machine_no}&kimlik_no=${id_no}`,
    raport_operation:
        (order, broadcasting, queue, id_no, operation_no, solid_piece, scrap_pieces, machine_no, active_cutting_time = "00:00:00") =>
            `/api/Operasyon/ifsoperasyonraporla?isemri=${order}&yayin=${broadcasting}&sira=${queue}&kimlik_no=${id_no}`
            + `&operasyonno=${operation_no}&saglam=${solid_piece}&hurda=${scrap_pieces}&makine_no=${machine_no}&aktif_kesme_suresi=${active_cutting_time}`,
    start_fault:
        (order, broadcasting, queue, operation_no, machine_no, id_no, fault_list_id) =>
            `/api/Ariza/arizabaslat?isemri=${order}&yayin=${broadcasting}&sira=${queue}&operasyon_no=${operation_no}&makina_no=${machine_no}&kimlik_no=${id_no}&ariza_no=${fault_list_id}`,
    stop_fault: (machine_no) => `/api/Ariza/arizadurdur?makina_no=${machine_no}`,
    c_time:
        (material, business_center, operation, machine_no) =>
            `/api/IsEmri/getmakinekesmesuresi?malzeme=${material}&ismerkezi=${business_center}&aciklama=${operation}&tezgah=${machine_no}`,
    current_operation: (machine_no) => `/api/Operasyon/aktifoperasyonis/${machine_no}`,
    current_fault: (machine_no) => `/api/Ariza/aktifariza/${machine_no}`
}