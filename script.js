function kirimData() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    document.getElementById('tanggal_daftar').value = formattedDate;

    const name = document.getElementById('name').value.trim();
    const nim = document.getElementById('nim').value.trim();
    const tanggalLahir = document.getElementById('tanggal_lahir').value;
    const angkatan = document.getElementById('angkatan').value;
    const jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked')?.value;
    const alamat = document.getElementById('alamat').value.trim();

    const peminatanCheckboxes = document.querySelectorAll('input[name="peminatan"]:checked');
    const peminatan = Array.from(peminatanCheckboxes).map(cb => cb.value).join(", ");

    console.log('--- Validasi Form ---'); 
    console.log('Nama:', name); 
    console.log('NIM:', nim); 
    console.log('Tanggal Lahir:', tanggalLahir); 
    console.log('Angkatan:', angkatan); 
    console.log('Jenis Kelamin:', jenisKelamin); 
    console.log('Alamat:', alamat); 
    console.log('Peminatan:', peminatan); 

    if (!name || !nim || !tanggalLahir || !angkatan || !jenisKelamin || !peminatan || !alamat) {
        alert('Harap lengkapi semua data!');
        console.log('Validasi gagal: ada data yang kosong.');
        return;
    }

    console.log('Validasi berhasil, semua data terisi.'); 

    const formattedTanggalLahir = new Date(tanggalLahir).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const resultContent = document.getElementById('resultContent');
    resultContent.innerHTML = `
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>NIM:</strong> ${nim}</p>
        <p><strong>Tanggal Lahir:</strong> ${formattedTanggalLahir}</p>
        <p><strong>Jenis Kelamin:</strong> ${jenisKelamin}</p>
        <p><strong>Alamat:</strong> ${alamat}</p>
        <p><strong>Angkatan:</strong> ${angkatan}</p>
        <p><strong>Peminatan:</strong> ${peminatan}</p>
        <p><strong>Tanggal Pendaftaran:</strong> ${formattedDate}</p>
    `;

    console.log('Isi popup telah diatur.'); 

    const popup = document.getElementById('popup');
    popup.classList.add('show');
    popup.classList.remove('hidden'); 
    console.log('Kelas "show" ditambahkan, kelas "hidden" dihapus dari popup.'); 
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('show');
    popup.classList.add('hidden'); 
}

document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    document.getElementById('tanggal_daftar').value = formattedDate;
});