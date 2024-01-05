function masuk(){
    let owner = document.getElementById("owner").value;
    let jenis = document.getElementById("jenis").value;
    let plate = document.getElementById("plate").value;
    let waktu = document.getElementById("waktu").value;
    

    let arr = new Array();
    arr = JSON.parse(localStorage.getItem("kendaraan"))?JSON.parse(localStorage.getItem("kendaraan")):[];
    if(arr.some((v) =>{
        return v.plate == plate
    })) {
        alert("No kendaraan sudah ada")
    }else{
        if( plate != ""){
            arr.push({
                "owner" : owner,
                "jenis" : jenis,
                "plate" : plate,
                "jam_masuk" : waktu,
             })
            localStorage.setItem("kendaraan", JSON.stringify(arr));
            show_data();
        }
    }
}


// function add_data(){
//     show_data();
// }

function show_data(){
    alert('data akan di tampilkan')
    let arr = JSON.parse(localStorage.getItem("kendaraan"));
    if(typeof arr != 'undifined'){
        jQuery(".data").remove();
        for (let i = 0; i < arr.length; i++){
            jQuery('#tableBody').append(
                `<tr class= "text-center" id="` + i +`" class="data">
                    <td>` + arr[i].owner + `</td>
                    <td>` + arr[i].jenis + `</td>
                    <td>` + arr[i].plate + `</td>
                    <td>` + arr[i].jam_masuk + `</td>
                    <td >` + arr[i].waktu + `</td>
                    <td class= "text-center"><button class="btn mx-auto rounded-4 bg-gradient btn-primary border-radius-4" onclick="hapus_data(` + i +`,'` + arr[i].jenis + `', '` + arr[i].jam_masuk + `')">keluar</button></td>
                </tr>`
            );
        }
    }
}
    
function hapus_data(id, jenis, jam_masuk){
    $(`#${id}`);
    let arr = JSON.parse(localStorage.getItem("kendaraan"));
    _.find(arr, ['jenis', jenis]);
    _.find(arr, ['jam_masuk', jam_masuk]);
    console.log('jenis kendaraan: ', jenis);
    console.log('jam masuk: ', jam_masuk)
    let jam_keluar = prompt("masukan jam keluar");
        
    // $(`#${id}`).remove();
    // let arr = JSON.parse(localStorage.getItem("kendaraan"))
    // _.remove(arr, {plate: plate});
    // localStorage.setItem("kendaraan", JSON.stringify(arr));
}

show_data();


// function addData() {
//     let owner = document.getElementById("owner").value;
//     let jenis = document.getElementById("jenis").value;
//     let plate = document.getElementById("plate").value;
//     let mobil = 4000;
//     let motor = 2000
//     let date = new Date();
//     masuk_kendaraan = String(date);

//     $('#parkingTable').append(`
//     <tbody class="table-group-divider" id=dataa>
//       <td></td>
//       <td>${owner}</td>
//       <td>${jenis}</td>
//       <td>${plate}</td>
//       <td>${masuk_kendaraan}</td>
//       <td><button class="btn-hps_data" onclick="removeData()">Hapus</button></td>
//       </tr>
//     </tbody>`);
//   }

//   function hapusData(id) {
//     $(`#dataa`).remove();
//     removeData();
//   }

//   function removeData() {
  
//     let owner = document.getElementById("owner").value;
//     let jenis = document.getElementById("jenis").value;
//     let plate = document.getElementById("plate").value;
//     let mobil = 4000;
//     let motor = 2000
//     let date = new Date();
//     masuk_kendaraan = String(date);
  
//     arr = JSON.parse(localStorage.getItem('kendaraan'));
  
//     // _.forEach(book_record, function (books) {
//     //     console.log(books)
//     _.remove(arr, { plate: plate });
//     alert('Berhasil Hapus Data');
//     console.log(arr);
//     localStorage.setItem('kendaraan', JSON.stringify(arr));
//   }

// function masukan data to local storage 



// ====================BACKUP=========================
// function masuk(){
//     let owner = document.getElementById("owner").value;
//     let jenis = document.getElementById("jenis").value;
//     let plate = document.getElementById("plate").value;
//     let date = new Date();
//     masuk_kendaraan = String(date);
   
    
    

//     let arr = new Array();
//     arr = JSON.parse(localStorage.getItem("kendaraan"))?JSON.parse(localStorage.getItem("kendaraan")):[];
    
//     if(arr.some((v) =>{
//         return v.plate == plate
//     })) {
//         alert("No kendaraan sudah ada")
//     }else{
//         if( plate != ""){
//             arr.push({
//                 "owner" : owner,
//                 "jenis" : jenis,
//                 "plate" : plate,
//                 "masuk" : masuk_kendaraan,
//              })
//              localStorage.setItem("kendaraan", JSON.stringify(arr));
//              show_data();
//         }
//     }
// }


// function add_data(){
//     show_data();
// }

// function show_data(){
// 	alert('data akan di tampilkan')
//     let tambah_data = JSON.parse(localStorage.getItem("kendaraan"))
//     if(typeof tambah_data != 'undefined') {
//         jQuery(".data").remove();
//         for (let i = 0; i < tambah_data.length; i++) {
//             jQuery('#tableBody').append(
//                 `<tr id="` + i +`" class="data">
//                     <td>` + tambah_data[i].owner + `</td>
//                     <td>` + tambah_data[i].jenis + `</td>
//                     <td>` + tambah_data[i].plate + `</td>
//                     <td>` + tambah_data[i].masuk_kendaraan + `</td>
//                     <td><button onclick="hapus_data(` + i +`,'` + tambah_data[i].plate +`')">Hapus Data</button></td>
//                 </tr>`
//             );
//         }
//     }
// }


// function hapus_data(id,){
//     $(`#${id}`).hide()
// }

// show_data();



//   {  
//   	$('#add_data').append(`<tr id="{tambah_data[i]}">
//          <td class="data">${tambah_data[i]}</td>
//          <td>${tambah_data[i].owner}</td>
//          <td>${tambah_data[i].jenis}</td>
//          <td>${tambah_data[i].plate}</td>
//          <td>${tambah_data[i].masuk_kendaraan}</td>
//          <td><button onclick="hapus_data(${tambah_data[i]},'${tambah_data[i].plate}')">Hapus Data</button></td>
//      </tr>`)
//   }
// }


// function  addEntryToTable(){
    

//     const tableBody=document.querySelector('#tableBody');
//     const row = document.createElement('tr');
//     row.innerHTML = `   <td>${owner}</td>
//                         <td>${jenis}</td>
//                         <td class="lp-data">${plate}</td>
//                         <td>${masuk_kendaraan}</td>
//                         <td>${exitDate || "N/A"}</td>
//                         <td class='text-center'>
//                             <div class="btn-group btn-group-sm">
//                                 <button type="button" class="btn btn-sm btn-outline-primary rounded-0 p-1 d-flex align-items-center justify-content-center park-out"><span class="material-symbols-outlined fs-6">logout</span></button>
//                                 <button type="button" class="btn btn-sm btn-outline-danger rounded-0 p-1 d-flex align-items-center justify-content-center delete"><span class="material-symbols-outlined fs-6">delete</span></button>
//                             <div>
//                         </td>
//                     `;

// }



// function show_data(){
    //     alert("data akan di tampilkan")
    //     let tambah_data = JSON.parse(localStorage.getItem("kendaraan"));
    //         if (typeof tambah_data != "undefined"){
        //             JQuery(`.data`).remove()
        //             for (let i = 0; 1 < tambah_data; i++){
            //                 JQuery(`#add_data`).append(
//                     `<tr id="`+i+`" class="data">
//                     <td></td>
//                     <td>`+tambah_data[i].username+`</td>
//                     <td>`+tambah_data[i].password+`</td>
//                     <td><button onclick="hapus_data(`+i+`,'`+tambah_data[i].username+`')">Hapus Data</button></td>
//                 </tr>`
//                 )
//             }
//         }
// }

// function tampilkanData(){
//     var table = document.getElementById("parkingTable");

//     var tbody = table.getElementsByTagName("tbody")[0];

//     for (var i = 0; i < data.length; i ++){
//         var row = tbody.insertRow(i);

//         var cell_1 = row.insertCell(0);    }
// }


// function hitung_biaya_parkir(){
//     var parkingCosts = [[  0, 2000],
//                      [ 20, 2000],
//                      [ 40, 2000],
//                      [ 60, 1000],
//                      [120, 2000],
//                      [180, 2000],
//                      [240, 2000],
//                      [480, 2000]];
// var firstDayFee = 16.00;
// var nextDayFee  = 9.00;

// function waktuInOut(startDateTime,finishDateTime) {
//   let start  = new Date(startDateTime);
//   let finish = new Date(finishDateTime);
//   return Math.floor(((finish - start) / 1000) / 60);
// }

// function computeParkingFee(parkingDateTime, returnDateTime) {
//   let minutes = waktuInOut(parkingDateTime, returnDateTime);
//   let parkingFee = 0.00;
//   if (minutes > 1440) {
//     let days = Math.ceil(minutes / 1440);
//     parkingFee = firstDayFee + nextDayFee * (days - 1);
//   }  else {
//     for (let cost of parkingCosts) {
//       if (minutes > cost[0]) {
//         parkingFee += cost[1];
//       } else {
//         break;
//       }
//     }
//   }
//   return parkingFee;
// }

// function outputParkingFee(parkingFee) {
//   document.querySelector("body").innerHTML = "Biaya parkir anda adalah Rp." + parkingFee + ".";
// }

// let parkingFee = computeParkingFee('5/12/2020 18:30', '5/12/2020 19:50');
// outputParkingFee(parkingFee);
// }
