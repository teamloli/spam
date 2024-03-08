const axios = require('axios');
const FormData = require('form-data');

function spam() {
    const formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSc17lCFNaoPAIirIGcQjBe98hD18rkuq1AksFxZxz5Bk3N5oA/formResponse';
const formData = new FormData();
formData.append('entry.1328153896', 'Slurd');
formData.append('entry.877803157', 'Slurd1');
const config = {
  headers: formData.getHeaders()
};
axios.post(formUrl, formData, config)
  .then(response => {
    console.log('Data berhasil dikirim:');
  })
  .catch(error => {
    console.error('Terjadi kesalahan saat mengirim data:');
  });
}
// spam()
for (let a = 0; a > 100; a++){
  spam()
}

// const axios = require('axios');
// const FormData = require('form-data');

// function spam() {
//     const formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSc17lCFNaoPAIirIGcQjBe98hD18rkuq1AksFxZxz5Bk3N5oA/formResponse';
// const formData = new FormData();
// formData.append('entry.1019258473', 'Rifki Alfian (Rifki MIPA 5)');
// formData.append('entry.1325148568', 'Rendra Denta (Rendra MIPA 5)');
//   formData.append('entry.1784043554', 'Nindy Gezza (Nindy MIPA 5)');
//   formData.append('entry.265097557', 'Gigih Prasetyo (Gigih MIPA 5)');
//   formData.append('entry.822109855', 'Dayu Dania (Dayu MIPA 5)');
//   formData.append('entry.357317209', 'Pegy Ayu (Peggy MIPA 5)');
//   formData.append('entry.1184978301', 'Bustomi Sultan (Tomi MIPA 5)');
//   formData.append('entry.841930338', 'Guntur Afandy (Guntur MIPA 5)');
//   formData.append('entry.1030215498', 'Wahyu Ardika (Wahyu MIPA 5)');
//   formData.append('entry.1023695991', 'Firman Ramadan (Firman MIPA 5)');
//   formData.append('entry.1554978469', 'Amanda lilian (Manda MIPA 5)');
// const config = {
//   headers: formData.getHeaders()
// };
// axios.post(formUrl, formData, config)
//   .then(response => {
//     console.log('Data berhasil dikirim:');
//   })
//   .catch(error => {
//     console.error('Terjadi kesalahan saat mengirim data:');
//   });
// }
// // spam()
// for (let a = 0; a > 100; a++){
//   spam()
// }
